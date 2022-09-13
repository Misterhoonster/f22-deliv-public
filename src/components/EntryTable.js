import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EntryModal from './EntryModal';
import { Box } from '@mui/system';
import { useState } from 'react';
import { SearchBar } from './SearchBar';
import { getCategory } from '../utils/categories';

// Table component that displays entries on home screen

export default function EntryTable({ entries }) {
   const filterData = (query, entries) => {
      if (!entries) {
        return entries;
      } else {
        return entries.filter((entry) => (entry.name.toLowerCase().includes(query) || entry.link.toLowerCase().includes(query)));
      }
    };

   const [query, setQuery] = useState("");
   const filtered = filterData(query, entries);

   return (
      <>
         <Box sx={{ marginBottom: 2, width: "35%"}}>
            <SearchBar setQuery={setQuery}/>
         </Box>
         <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
               <TableHead>
                  <TableRow>
                     <TableCell>Name</TableCell>
                     <TableCell align="right">Link</TableCell>
                     <TableCell align="right">User</TableCell>
                     <TableCell align="right">Category</TableCell>
                     {/* for location */}
                     <TableCell align="right">Location</TableCell>
                     <TableCell align="right">Open</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {filtered.map((entry) => (
                     <TableRow
                        key={entry.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                     >
                        <TableCell component="th" scope="row">
                           {entry.name}
                        </TableCell>
                        <TableCell align="right"><Link href={entry.link}>{entry.link}</Link></TableCell>
                        <TableCell align="right">{entry.user}</TableCell>
                        <TableCell align="right">{getCategory(entry.category).name}</TableCell>
                        {/* for location */}
                        <TableCell align="right">{entry.location}</TableCell>
                        <TableCell sx={{ "padding-top": 0, "padding-bottom": 0 }} align="right">
                           <EntryModal entry={entry} type="edit" />
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </>
   );
}
