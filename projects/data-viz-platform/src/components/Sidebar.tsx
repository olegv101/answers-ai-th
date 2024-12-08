import {
    Home,
    Bell,
    Settings,
    LogOut,
    AlignJustify,
    CircleUserRound,
    CloudUpload,
    ClipboardList,
} from "lucide-react";
import { Button } from "./ui/Button";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

/**
 * Sidebar Component
 * Provides main navigation for the application.
 * Contains:
 * - Main navigation buttons (home, notifications, etc.)
 * - User-related actions (profile, logout)
 */
export function Sidebar() {
    const { signOut } = useAuth();
    const navigate = useNavigate();

    /**
     * Handles user logout
     * Signs out the user and redirects to signin page
     */
    const handleSignOut = async () => {
        await signOut();
        navigate("/signin");
    };

    return (
        <div className="w-20">
            <div className="flex h-screen flex-col items-center py-4">
                {/* Main Navigation Section */}
                <nav className="space-y-4">
                    <Button variant="icon">
                        <AlignJustify className="h-5 w-5" />
                    </Button>
                    {/* Active state indicated by background */}
                    <Button
                        variant="icon"
                        className="text-white border bg-white/10 border-[#525252]"
                    >
                        <Home className="h-5 w-5" />
                    </Button>
                    <Button variant="icon">
                        <Bell className="h-5 w-5" />
                    </Button>
                    <Button variant="icon">
                        <ClipboardList className="h-5 w-5" />
                    </Button>
                    <Button variant="icon">
                        <CloudUpload className="h-5 w-5" />
                    </Button>
                    <Button variant="icon">
                        <Settings className="h-5 w-5" />
                    </Button>
                </nav>

                {/* User Actions Section */}
                <div className="mt-auto space-y-4">
                    <Button variant="icon">
                        <CircleUserRound className="h-5 w-5" />
                    </Button>
                    <Button variant="icon" onClick={handleSignOut}>
                        <LogOut className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </div>
    );
}