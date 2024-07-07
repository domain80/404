import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export function BookingsTable({ bookings }: { bookings: any }) {
  return (
    <Table className="max-w-screen-md">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Company</TableHead>
          <TableHead>Course</TableHead>
          <TableHead>Course Fee</TableHead>
          <TableHead className="text-right">Delegates</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bookings.map((booking: any, index: number) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{booking.company}</TableCell>
            <TableCell>{booking.course}</TableCell>
            <TableCell>$ {booking.courseFee}</TableCell>
            <TableCell className="text-right">{booking.delegates}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow></TableRow>
      </TableFooter>
    </Table>
  );
}
