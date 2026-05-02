import React from 'react';
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


const Footers = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-gray-300 mt-10">
                <div className="container mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-lg font-semibold text-white mb-4">Contact</h2>
                        <p>Nageswari, Kurigram, Bangladesh</p>
                        <p>Email: support@yourwebsite.com</p>
                        <p>Phone: +880 1XXXXXXXXX</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
                        <ul className="space-y-2">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h2 className="text-lg font-semibold text-white mb-4">Legal</h2>
                        <ul className="space-y-2">
                            <li><Link href="/terms">Terms & Conditions</Link></li>
                            <li><Link href="/privacy">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h2 className="text-lg font-semibold text-white mb-4">Follow Us</h2>
                        <div className="flex gap-4 text-xl">
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaLinkedin /></a>
                            <a href="#"><FaGithub /></a>
                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="text-center border-t border-gray-700 py-4 text-sm">
                    © {new Date().getFullYear()} YourWebsite. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Footers;