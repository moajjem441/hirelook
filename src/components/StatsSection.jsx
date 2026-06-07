import React from 'react';
import { Card } from '@heroui/react';
import { IoBriefcaseOutline, IoBusinessOutline, IoSearchOutline, IoStarOutline } from 'react-icons/io5';

const stats = [
    { label: 'Active Jobs', value: '50K', icon: IoBriefcaseOutline },
    { label: 'Companies', value: '12K', icon: IoBusinessOutline },
    { label: 'Job Seekers', value: '2M', icon: IoSearchOutline },
    { label: 'Satisfaction Rate', value: '97%', icon: IoStarOutline },
];

const StatsSection = () => {
    return (
        <section 
            className="relative w-full bg-[#0a0a0a] py-24 px-6 overflow-hidden bg-[url('/images/globe.png')] bg-center bg-no-repeat bg-contain bg-cover"
        >
            {/* Background Glow Effect (Kept for depth) */}
            <div className="absolute inset-0 flex justify-center opacity-50">
                <div className="w-[800px] h-[500px] bg-gradient-to-b from-blue-900/40 to-transparent rounded-full blur-[120px] -mt-32" />
            </div>

            <div className="relative mx-auto max-w-5xl z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                        Assisting over <span className="text-white">15,000 job seekers</span><br />
                        find their dream positions.
                    </h2>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <Card
                                key={index}
                                className="bg-[#141414]/80 border border-white/5 p-8 min-h-[220px] flex flex-col justify-between backdrop-blur-sm transition-transform hover:-translate-y-2 duration-300"
                            >
                                <IconComponent className="text-gray-500 text-3xl mb-6" />
                                <div>
                                    <h3 className="text-4xl font-bold text-white mb-2">
                                        {stat.value}
                                    </h3>
                                    <p className="text-gray-400 font-medium">
                                        {stat.label}
                                    </p>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;