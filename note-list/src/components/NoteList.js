import React from "react";
import NoteItem from "./NoteItem";

export default function NoteList ({notes, changeNote, setChangeNote, setNotes, saveChanges}) {

    return(
        <div className="note_list" onClick={e => e.stopPropagation()}>
        {notes.length === 0
                ? <div>Список пуст</div>
                : notes.map(note =>
                    <NoteItem
                        key={note.id}
                        note={note}
                        notes={notes}
                        setNotes={setNotes}
                        setChangeNote={setChangeNote}
                        saveChanges={saveChanges}
                        changeNote={changeNote}
                    />
                )
        }
        </div>

    )
}