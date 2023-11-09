import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import useTheme from '@mui/system/useTheme';

function createRow(
  CName: string,
  Organization: string,
  JName: string,
  DOI: Date,
  Feestaxes: number,
  Billedamount: number,
  Earnings: number,
  Invoice: string
): Row {
  return { CName, Organization, JName, DOI, Feestaxes, Billedamount, Earnings, Invoice };
}

interface Row {
  CName: string;
  Organization: string;
  JName: string;
  DOI: Date;
  Feestaxes: number;
  Billedamount: number;
  Earnings: number;
  Invoice: string;
}

const rows = [
  createRow('Jane Doe', 'XYZ Development Services', 'Fractional CTO', new Date(), 20, 200, 180, 'INV2342'),
  createRow('Jane Doe', 'XYZ Development Services', 'Fractional CTO', new Date(), 20, 200, 180, 'INV2342')
];

export default function Earningsbillingstable() {
  const theme = useTheme();
  return (
    <Table sx={{ minWidth: 700 }}>
      <TableHead>
        <TableRow>
          <TableCell sx={{ color: theme.palette.secondary.main, fontSize: '1rem' }}>Client Name</TableCell>
          <TableCell sx={{ color: theme.palette.secondary.main, fontSize: '1rem' }}>Job Name</TableCell>
          <TableCell sx={{ color: theme.palette.secondary.main, fontSize: '1rem' }}>Date of Invoice</TableCell>
          <TableCell sx={{ color: theme.palette.secondary.main, fontSize: '1rem' }}>Fees & Taxes</TableCell>
          <TableCell sx={{ color: theme.palette.secondary.main, fontSize: '1rem' }}>Billed Amount</TableCell>
          <TableCell sx={{ color: theme.palette.secondary.main, fontSize: '1rem' }}>Earnings</TableCell>
          <TableCell sx={{ color: theme.palette.secondary.main, fontSize: '1rem' }}>Invoice</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.CName}>
            <TableCell sx={{ fontSize: '1rem' }}>
              {row.CName}
              <br />
              {row.Organization}
            </TableCell>
            <TableCell sx={{ fontSize: '1rem' }}>{row.JName}</TableCell>
            <TableCell sx={{ fontSize: '1rem' }}>{row.DOI.toLocaleDateString('en-GB')}</TableCell>
            <TableCell sx={{ fontSize: '1rem' }}>{row.Feestaxes}</TableCell>
            <TableCell sx={{ fontSize: '1rem' }}>{row.Billedamount}</TableCell>
            <TableCell sx={{ fontSize: '1rem' }}>{row.Earnings}</TableCell>
            <TableCell sx={{ fontSize: '1rem', color: theme.palette.primary.main }}>{row.Invoice}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
