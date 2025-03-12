import { useEffect, useState } from "react";
import {Bowler} from "./types/bowler.ts"

function BowlerList(){

  
  const [bowlers, setBowlers] = useState<Bowler[]>([])

  useEffect(() => {

    // fetch data from BowlingLeague api
    // throw an error if not successful
    const fetchBowler = async () => {
      try {
        const response = await fetch("https://localhost:5003/api/BowlingLeague");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setBowlers(data);
      } catch (error) {
        console.error("Error fetching bowlers:", error);
      }
    };

    fetchBowler();
  }, []);

  // return react component with table of bowlers
  // filter the bowlers to only teams Marlins and Sharks
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Bowler Name</th>
                    <th>Team Name</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {bowlers
                  .filter((bowler) => (bowler.team.teamName == "Marlins" || bowler.team.teamName == "Sharks")) 
                  .map((b) => (
                        <tr key={b.bowlerId}>
                            <td>{b.bowlerFirstName} {b.bowlerMiddleInit} {b.bowlerLastName}</td>
                            <td>{b.team?.teamName}</td>
                            <td>{b.bowlerAddress}</td>
                            <td>{b.bowlerCity}</td>
                            <td>{b.bowlerState}</td>
                            <td>{b.bowlerZip}</td>
                            <td>{b.bowlerPhoneNumber}</td>

                        </tr>
                    ))

                }
            </tbody>
        </table>
        
        </>

    );
}
export default BowlerList;