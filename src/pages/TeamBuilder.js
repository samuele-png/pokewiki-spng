import TeamList from "../components/TeamList.js";
import AddTeamForm from "../components/AddTeamForm.js";
export default function Nav() {
  return (
    <div>
      <AddTeamForm />
      <TeamList />
    </div>
  );
}
