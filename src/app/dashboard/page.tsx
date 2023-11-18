import Link from "next/link";
import { CardTitle, CardHeader, CardContent, Card } from "~/components/ui/card";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "~/components/ui/table";

export default function Component() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="flex h-16 shrink-0 items-center border-b px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 lg:gap-6">
          <Link
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
            href="#"
          >
            <svg
              className=" h-6 w-6"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m6.5 6.5 11 11" />
              <path d="m21 21-1-1" />
              <path d="m3 3 1 1" />
              <path d="m18 22 4-4" />
              <path d="m2 6 4-4" />
              <path d="m3 10 7-7" />
              <path d="m14 21 7-7" />
            </svg>
            <span className="sr-only">Workout Tracker</span>
          </Link>
          <Link className="font-bold" href="#">
            Dashboard
          </Link>
          <Link className="text-zinc-500 dark:text-zinc-400" href="#">
            Routines
          </Link>
          <Link className="text-zinc-500 dark:text-zinc-400" href="#">
            Blocks
          </Link>
          <Link className="text-zinc-500 dark:text-zinc-400" href="#">
            Progress
          </Link>
          <Link className="text-zinc-500 dark:text-zinc-400" href="#">
            Settings
          </Link>
        </nav>
      </header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Current Routine
              </CardTitle>
              <svg
                className=" h-4 w-4 text-zinc-500 dark:text-zinc-400"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect height="18" rx="2" ry="2" width="18" x="3" y="4" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold">Strength Block</div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                4 weeks remaining
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Block</CardTitle>
              <svg
                className=" h-4 w-4 text-zinc-500 dark:text-zinc-400"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m6.5 6.5 11 11" />
                <path d="m21 21-1-1" />
                <path d="m3 3 1 1" />
                <path d="m18 22 4-4" />
                <path d="m2 6 4-4" />
                <path d="m3 10 7-7" />
                <path d="m14 21 7-7" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold">Hypertrophy Block</div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Starts in 5 weeks
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Workouts This Week
              </CardTitle>
              <svg
                className=" h-4 w-4 text-zinc-500 dark:text-zinc-400"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m17 2 4 4-4 4" />
                <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
                <path d="m7 22-4-4 4-4" />
                <path d="M21 13v1a4 4 0 0 1-4 4H3" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                +1 from last week
              </p>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Exercise</TableHead>
                  <TableHead>Sets</TableHead>
                  <TableHead>Reps</TableHead>
                  <TableHead>RPE</TableHead>
                  <TableHead className="text-right">1RM</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Bench Press</TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>8</TableCell>
                  <TableCell className="text-right">225 lbs</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Squat</TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>8</TableCell>
                  <TableCell className="text-right">315 lbs</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Deadlift</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>9</TableCell>
                  <TableCell className="text-right">405 lbs</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </div>
      </main>
    </div>
  );
}
