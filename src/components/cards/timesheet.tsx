import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import useTheme from '@mui/system/useTheme';

function ccyFormat(num: number) {
  return `${num.toFixed(2)}`;
}

function priceRow(Hours: number, Rate: number) {
  return Hours * Rate;
}

function createRow(Job: string, Hours: number, Rate: number, Sun: number): Row {
  const Amount = priceRow(Hours, Rate);
  return { Job, Hours, Rate, Amount, Mon: 0, Tues: 0, Wed: 0, Thurs: 0, Fri: 0, Sat: 0, Sun };
}

interface Row {
  Job: string;
  Mon: number;
  Tues: number;
  Wed: number;
  Thurs: number;
  Fri: number;
  Sat: number;
  Sun: number;
  Hours: number;
  Rate: number;
  Amount: number;
}

function subtotal(items: readonly Row[]) {
  return items.map(({ Amount }) => Amount).reduce((sum, i) => sum + i, 0);
}

const rows = [createRow('Jane Doe - Fractional CTO', 100, 30, 0), createRow('Steven Park Fractional CTO', 50, 40, 2)];

const invoiceSubtotal = subtotal(rows);

export default function SpanningTable() {
  const theme = useTheme();
  const totalHours = rows.reduce((sum, row) => sum + row.Hours, 0);
  const averageRate = rows.reduce((sum, row) => sum + row.Rate, 0) / rows.length;
  return (
    <Table sx={{ minWidth: 700 }}>
      <TableHead>
        <TableRow>
          <TableCell sx={{ color: theme.palette.secondary.main, fontSize: '1rem' }}>Job</TableCell>
          <TableCell sx={{ color: theme.palette.secondary.main, fontSize: '1rem' }} align="right">
            Mon
          </TableCell>
          <TableCell sx={{ color: theme.palette.secondary.main, fontSize: '1rem' }} align="right">
            Tues
          </TableCell>
          <TableCell sx={{ color: theme.palette.secondary.main, fontSize: '1rem' }} align="right">
            Wed
          </TableCell>
          <TableCell sx={{ color: theme.palette.secondary.main, fontSize: '1rem' }} align="right">
            Thurs
          </TableCell>
          <TableCell sx={{ color: theme.palette.secondary.main, fontSize: '1rem' }} align="right">
            Fri
          </TableCell>
          <TableCell sx={{ color: theme.palette.secondary.main, fontSize: '1rem' }} align="right">
            Sat
          </TableCell>
          <TableCell sx={{ color: theme.palette.secondary.main, fontSize: '1rem' }} align="right">
            Sun
          </TableCell>
          <TableCell sx={{ color: theme.palette.secondary.main, fontSize: '1rem' }} align="right">
            Hours
          </TableCell>
          <TableCell sx={{ color: theme.palette.secondary.main, fontSize: '1rem' }} align="right">
            Rate
          </TableCell>
          <TableCell sx={{ color: theme.palette.secondary.main, fontSize: '1rem' }} align="right">
            Amount
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.Job}>
            <TableCell sx={{ fontSize: '1rem' }}>{row.Job}</TableCell>
            <TableCell sx={{ fontSize: '1rem' }} align="right">
              {row.Mon !== 0 ? row.Mon : '--'}
            </TableCell>
            <TableCell sx={{ fontSize: '1rem' }} align="right">
              {row.Tues !== 0 ? row.Tues : '--'}
            </TableCell>
            <TableCell sx={{ fontSize: '1rem' }} align="right">
              {row.Wed !== 0 ? row.Wed : '--'}
            </TableCell>
            <TableCell sx={{ fontSize: '1rem' }} align="right">
              {row.Thurs !== 0 ? row.Thurs : '--'}
            </TableCell>
            <TableCell sx={{ fontSize: '1rem' }} align="right">
              {row.Fri !== 0 ? row.Fri : '--'}
            </TableCell>
            <TableCell sx={{ fontSize: '1rem' }} align="right">
              {row.Sat !== 0 ? row.Sat : '--'}
            </TableCell>
            <TableCell sx={{ fontSize: '1rem' }} align="right">
              {row.Sun !== 0 ? row.Sun : '--'}
            </TableCell>
            <TableCell sx={{ fontSize: '1rem' }} align="right">
              {row.Hours}
            </TableCell>
            <TableCell sx={{ fontSize: '1rem' }} align="right">
              {row.Rate}
            </TableCell>
            <TableCell sx={{ fontSize: '1rem' }} align="right">
              {ccyFormat(row.Amount)}
            </TableCell>
          </TableRow>
        ))}
        <TableRow>
          <TableCell rowSpan={8} />
          <TableCell colSpan={7}></TableCell>
          <TableCell sx={{ fontSize: '1rem' }} align="right">
            {totalHours}
          </TableCell>
          <TableCell sx={{ fontSize: '1rem' }} align="right">
            {averageRate.toFixed(2)}
          </TableCell>
          <TableCell sx={{ fontSize: '1rem' }} align="right">
            {ccyFormat(invoiceSubtotal)}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
