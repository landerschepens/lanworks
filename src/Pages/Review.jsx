import { useNavigate } from "react-router-dom";
import { loadEntries, saveEntries } from "../utils/storage";
import "./ServicePage.css";
import jsPDF from "jspdf";
import "jspdf-autotable";
import autoTable from "jspdf-autotable";


export default function Review() {
    const navigate = useNavigate();
    const entries = loadEntries();

    const grouped = Object.entries(entries).reduce((acc, [date, entry]) => {
        const month = date.slice(0, 7);
        acc[month] = acc[month] || [];
        acc[month].push({ date, ...entry });
        return acc;
    }, {});

    const handleDelete = (date) => {
        if (!confirm("Delete this entry?")) return;
        delete entries[date];
        saveEntries(entries);
        location.reload();
    };
    const handlePublish = () => {
        if (Object.keys(entries).length === 0) return alert("No entries to publish");

        const doc = new jsPDF();
        const blue = "#1070ca";

        const grouped = Object.entries(entries).reduce((acc, [date, e]) => {
            const month = date.slice(0, 7);
            acc[month] = acc[month] || [];
            acc[month].push({ date, ...e });
            return acc;
        }, {});

        let startY = 20;
        doc.setFontSize(16);
        doc.setTextColor(blue);
        doc.text("Time Entries Review", 105, 10, { align: "center" });

        Object.entries(grouped).forEach(([month, items]) => {
            const total = items.reduce((sum, e) => sum + e.hours, 0);

            doc.setFontSize(14);
            doc.setTextColor(0, 0, 0);
            doc.text(`${month} — Total: ${total.toFixed(2)} h`, 14, startY);
            startY += 6;

            const tableData = items.map((e) => [
                e.date,
                e.start,
                e.end,
                e.hours.toFixed(2),
                e.note || "-",
            ]);

            autoTable(doc, {
                startY,
                head: [["Date", "Start", "End", "Hours", "Note"]],
                body: tableData,
                theme: "grid",
                headStyles: { fillColor: blue, textColor: 255, halign: "center" },
                styles: { fontSize: 10, cellPadding: 3 },
                margin: { left: 14, right: 14 },
            });

            startY = doc.lastAutoTable.finalY + 10;
        });

        doc.save("time_entries.pdf");
    };

    return (
        <div className="review-page">
            <h1>Review Entries</h1>

            {Object.keys(grouped).length === 0 && (
                <p>No entries recorded.</p>
            )}

            {Object.entries(grouped).map(([month, items]) => {
                const total = items.reduce((s, e) => s + e.hours, 0);

                return (
                    <div key={month} className="review-month">
                        <h2>
                            {month} — {total.toFixed(2)} h
                        </h2>

                        {items.map((e) => (
                            <div key={e.date} className="review-row">
                                <div>
                                    <strong>{e.date}</strong>
                                    <div className="review-note">{e.note || "—"}</div>
                                </div>

                                <div>
                                    {e.start} – {e.end}
                                </div>

                                <div className="review-actions">
                                    <strong>{e.hours.toFixed(2)} h</strong>
                                    <button onClick={() => handleDelete(e.date)}>Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            })}

            <button className="review-back" onClick={() => navigate(-1)}>
                ← Back to tracker
            </button>
            <button className="review-publish" onClick={handlePublish}>
                Publish
            </button>

        </div>
    );
}
