export default function Footer() {
    return (
        <footer className="py-6 md:py-8 border-t border-white/10 bg-black/40">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-xs md:text-sm text-muted-foreground gap-3 md:gap-0">
                <p className="text-center md:text-left">© 2025 FeLix Design. All rights reserved.</p>
                <div className="flex gap-4 md:gap-6 mt-1 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
