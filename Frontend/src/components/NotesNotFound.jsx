import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";

const NotesNotFound = () => {
return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
        <div className="bg-primary/10 rounded-full p-8">
            <NotebookIcon className="size-10 text-primary" />
        </div>
        <h3 className="text-2xl font-bold">No notes yet</h3>
        <p className="text-base-content/70">
            Welcome To Our Todo Application Developed By Jagan Tripuragiri.
        </p>
        <p className="text-base-content/60">
            Start organizing your tasks and boost your productivity by creating your first note. 
            Stay on top of your daily goals and never miss an important task again!
        </p>
        <Link to="/create" className="btn btn-primary">
            Create Your First Note
        </Link>
    </div>
);
};
export default NotesNotFound;