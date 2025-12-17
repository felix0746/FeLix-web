export default function Footer() {
    return (
        <footer className="py-8 border-t border-white/10 bg-black/40">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
                <p>© 2025 FeLix Design. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
