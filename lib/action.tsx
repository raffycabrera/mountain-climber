'use server';
import { sql } from "@vercel/postgres";

export async function saveTime(time: number) {
  const rawTimeData = {

    duration: time,
  };

  const date = new Date().toISOString().split('T')[0];


  await sql`
    INSERT INTO time_entries (time, date)
    VALUES (${time}, ${date})
  `;

}
