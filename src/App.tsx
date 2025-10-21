import { Button } from "./components/ui/button";
import { useNavigate } from "react-router";

const sections: string[] = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
];

export default function App() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen">
      {sections.map((section) => (
        <Button
          variant="outline"
          onClick={() => navigate(`/section?id=${section}`)}
        >
          Section {section}
        </Button>
      ))}
    </div>
  );
}
