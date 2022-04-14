import React from "react";
import MyButton from "../UI/MyButton/MyButton";

export default function NoteItem({note, changeNote, saveChanges, setChangeNote, setNotes, notes}) {
    const changer = (id) => {
        setChangeNote(id)
    }

    const remove = (id) => {
        setNotes(notes.filter(note => note.id !== id))
    }
    return(
        <div className="note active">
            <div className="note_header">
                <div className="note_header__left">
                    {note.date}
                </div>
                <div className="note_header__right">
                    <MyButton
                        onClick={e => {
                            const near = e.target.closest('.note')
                            if (near.classList.contains('active')) {
                                near.classList.remove('active')
                                e.target.textContent = 'скрыть'
                            } else {
                                near.classList.add('active')
                                e.target.textContent = 'показать'
                            }
                        }}
                    >показать</MyButton>
                    {changeNote === note.id
                        ? <MyButton style={{background: '#198754'}} onClick={e => {saveChanges()}}>Сохранить</MyButton>
                        : <MyButton onClick={e => {changer(note.id)
                        }}>Изменить</MyButton>
                    }
                    <MyButton style={{background: '#DC3545'}} onClick={() => remove(note.id)}>Удалить</MyButton>
                </div>
            </div>
            <div className="note_main">
                {changeNote === note.id
                    ? <textarea
                        value={note.info}
                        onChange={e => setNotes(notes.map(n => {
                            if (n.id === note.id) {
                                n.info = e.target.value
                            }
                            return n
                        }))}
                    />
                    : <div>{note.info}</div>
                }
            </div>
        </div>
    )
}