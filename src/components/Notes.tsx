import { Box, Typography } from "@mui/material";
import { NoteObject } from "../models/note";
import Note from "./Note";

interface INotesprops {
  notes: NoteObject[];
  deleteNote: (id: number) => void;
}

const Notes: React.FC<INotesprops> = ({ notes, deleteNote }) => {
  return (
    <Box>
      <Typography variant="h5">Notes</Typography>
      <Box>
        {notes.map((note) => (
          <Note note={note} deleteNote={deleteNote} />
        ))}
      </Box>
    </Box>
  );
};
export default Notes;
