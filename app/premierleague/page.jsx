import Link from 'next/link';
import React from 'react';

const LeagueTableWithForm = () => {

    const categories = [
        { name: 'ALL', active: true, link: "/" },
        { name: 'Champions', img: '/01.png', link: "/uefachampionleague" },
        { name: 'Premier', img: '/02.png', link: "premierleague" },
        { name: 'LaLiga', img: '/03.png', link: "laliga" },
    ];

    const teams = [
        { rank: 1, name: 'Arsenal', mp: 34, w: 29, d: 1, l: 4, gf: 89, ga: 31, gd: 58, pts: 88, form: ['w', 'w', 'w', 'w', 'w'], logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/optimized/4us2nCgl6kgZc0t3hpW75Q_48x48.png', },
        { rank: 2, name: 'Man City', mp: 34, w: 24, d: 5, l: 5, gf: 70, ga: 31, gd: 39, pts: 77, form: ['l', 'd', 'w', 'd', 'w'], logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/optimized/z44l-a0W1v5FmgPnemV6Xw_48x48.png', },
        { rank: 3, name: 'Man United', mp: 34, w: 21, d: 5, l: 8, gf: 64, ga: 39, gd: 25, pts: 68, form: ['l', 'w', 'd', 'w', 'w'], logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/optimized/udQ6ns69PctCv143h-GeYw_48x48.png', },
        { rank: 4, name: 'Liverpool', mp: 34, w: 19, d: 6, l: 9, gf: 58, ga: 37, gd: 21, pts: 63, form: ['l', 'l', 'l', 'w', 'w'], logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/optimized/nGfV05dipbAc7zzojivKew_48x48.png', },
        { rank: 5, name: 'Aston Villa', mp: 34, w: 13, d: 14, l: 7, gf: 52, ga: 41, gd: 11, pts: 53, form: ['d', 'd', 'd', 'd', 'w'], logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/optimized/uyNNelfnFvCEnsLrUL-j2Q_48x48.png', },
        { rank: 6, name: 'Chelsea', mp: 34, w: 12, d: 11, l: 11, gf: 48, ga: 44, gd: 4, pts: 47, form: ['w', 'l', 'l', 'l', 'w'], logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/optimized/fhBITrIlbQxhVB6IjxUO6Q_48x48.png', },
    ];

    const FormIcon = ({ type }) => {
        const baseClasses = "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white";
        if (type === 'w') return (
            <div className={`${baseClasses} bg-green-600`}>
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            </div>
        );
        if (type === 'l') return (
            <div className={`${baseClasses} bg-red-500`}>
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </div>
        );
        return (
            <div className={`${baseClasses} bg-gray-500`}>
                <div className="w-2 h-0.5 bg-white rounded-full"></div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-[#1a1a1a] text-gray-300 p-2 font-sans selection:bg-green-500/30">

            {/* League Categories */}
            <div className="flex gap-4 px-6 overflow-x-auto no-scrollbar py-4 scroll-smooth">
                {categories.map((cat, i) => (
                    <Link href={cat?.link} key={i} className="flex-shrink-0">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center border border-gray-700 bg-[#2d2d2d] ${cat.active ? 'bg-[#444]' : ''}`}>
                            {cat.active ? (
                                <span className="text-xs font-bold">Match</span>
                            ) : (
                                <img src={cat.img} alt={cat.name} className="w-10 h-10 object-contain" />
                            )}
                        </div>
                    </Link>
                ))}
            </div>

            {/* Tournament Logo */}
            <div className='flex items-center gap-4 py-6'>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAJpklEQVR4Ae2bA5AkTxPFv8Pftm3bxtm2bdu2bdu2bdu2b72zv29fRFX8e2535xDTc7MR9yLydrd7pq/zdVVW5svq/93DPQQWQBIgNZDS/K5jTksGZARS2PNumv4JtHXEQr/HdX4CYNEwMRKQFCgNtAM+xPvcI8D10OthXLl4DcAD/OA43wfg1JGzGGwDHgRyA38lFgIqYwGhQCU7lI0jzB+3jHYVe2KwCUgONAW4cPoieb4sQ3RUNMAlc96ifGIgYBDAilnriIqMwmA+8BowCaBu3tb8+VQ2tq7a5TzP9SshFPutGn88mZVL565gceb4OQymBysBXwATgcHAWIDO1ftR/PdqHNp1FINLQLic/PeFXHKSwj9VJioyGiEiPJLKGRrquIyj+04gzB27hLE9p2FQJ1gJ2Is3mNh3phwhxYu5GNNjKjGeGITZIxeh49ZGdJqIx+OhYaF2Xsd3rNvDvHFL+evp7DYmeICXg5WAizExMUwfMo8Lpy8hrF+8xcshPd3TR89SM0dzr+OpXspD02IdvY7J+jYZzr/P5yTv12Ux2BjMQbAKwJ7NB0j3RgGmDprL2RPn4ziV9vX8/PNcDv1+y9akaAcMugYzAUmBNQCNi3RAN96gYNvYJ5jLp3N/PZOdDG8XIssHRcn8XhFSvpQnzmeGtB2LQclgXwZTAOzfflgRPo4jKV7IRfWsTRneYQLrFm5GkV1z/0ZcvxrC3q0HmTN6MV1q9mftgk0YpEwMecBagKqZG2Mdr5iuAXIm5FoowoUzl1g5ex2juk6mS63+NC/ZmSZFO6I40L5yL6zDHk8MkRFROHAWqAs8EswEFABYMGE59fO3Ye+WA9hR0afxMAr+UPGW5n23OgNRIpTnq7JUz9KEhRNXEB3tweAYkDFYCXgUuAxgk6EyKWrLqds2jQyZ/VurwaLJK3GgC5AsmAgoD1zBAQ17rfOa/zdzWHEjxYu5vY6lez1/nM/VztXCmSU2CwYC7geG2nlrcXTvcWYMm685rZEQb2BU5O9aawBr52/i6qVrKBsc3nECaV7N91+e8HIeKqdv6PW9gt9XxGDb3SbgYWCezdeHth2HMHfMEv5+Jjv2hrN/UoLUr+T1cnzKgNlERkQSH86fvkjLMl1jSctKuVR1EVbOXk+uz0rZa9hREKFpd7cIeMAWMfu3HSLbR8XRmu2J9pDxncIJDvUqmRpx+cJVbgVr5m9i/vhlXlOqTfkeuo7zeO67QUASYBTAvq0HyfBWIXRTWuPPHj/vc65neb+ore7uGNOHzqNevtYYLLgbBFQHCRdn5JBX2nru5IUEna+Yrr6zOuTY/hP0bz4SJTzbVu/idrB+0RauaCRBDPBSIAn4GogMD42g2G9V5ZhXwFIxlOnduFOgTYUeREdHI0gn6F53EH8/410XVMvShM3Lt9O/2UhGdp6EE1KRls9YiyV+07LtGEQAzwaKgORWoelco18cJ23V16pMtzhLXKPC7ZncfzaCqsJKNrInYBodN2Jgy1HUyNYMrRKqG7RyAOHAF4EioBzA1lU7413WrCW07qd7s4CVurAZ4oTeMxjUajT9mo2gdfnu6Ls2njhhR06Zf2uh89k+LM75Uxedo+AHtwl4CDgtYUNKj3Xqdm18rMO+sHnFDlRS67MT+syIp1gKpWqmxqi03rvlICePnMFgF/CgmwT8YBVbFS9Ff61qR8FtmfSAWSMW4gvSFdLHjhZdXyLLjVCR1Kx4J5RP1Mze3FkxNnSTgEeAIxgsmrRCDt2xKcFRRThr5EIvUxK1et5Glkxbjea6JLGutfqj2JLx7UJIT5TjVTI2Iq1JlfN8VYaIsAirQr/qZgzIbEtaCRnWGZfM1ga3ZEqhDfq5RUASq/q0KNXFZeftdMmpqK+nn2CwTfNaPvS74sa1KyE2IL7qBgFpAfZuPsCfT2dz1fHUr+ZlQItRzqqPVXPWe+kJhX+uzIHth7UcxzcKWrhBwALAyteuWd08rVA2GR+0hKprJC1RlaMlxn4356clrcx2EkjmTwLeAWKUgek/d8PxlC/lZuqgOdwMhX6oxN/P5sBCmafzOhuWbMXgT38S0BBQtefak0/7Wn4un79y2wSoH+F8KJoSBm38ScA6gEI/VnJ1+PeoNwhf0NOVrqD8YOf6vQga8loq7TXyf1seg9X+IuB5wKP83U3nbVQ/cyxuqazsc0THiejJ289meqcwpw6fUWEUp+5w1AjJ/UFAJkBJSkCWPgkeTqh8rpS+QbyfrZCmHjOGzo9z3FFav+MPAmoCdK87EF1c/To1OHJ/UcYVAiSlKbLPG7sESet2fuvJqm8wrtc0xvWcpm6SHQlxrqGmqsEf/iCgBYDyd+n9am8DmmuujwZrWT8sxup5G7CwbfOEPq/OtEFmfxCQBW9I/bXz0VVTrt+z/mA7p+PkBOnfLBjv98b2mIZBDn+tArmAdoaMSElRbjtf5OfKRCrZSQDhYRGkTKBWmNRvFgaZ/F0MJbUSeCCGvpqoFlKbJ/abyS1Uo1KM/RkD4mxjw+0l0VqJP2ug3sHiKauw+mPI1VCR4UOU0SqwG4O33RBFo1QOByoA2oaKtcO7j9Gv6QgfLbasNmaEAcndIOCCChEfN203QLlVLPk8r46ywTq3ZPE9gErWBG+i1N81tctLvwfKbJ7iTKQ6uUXAIoAC31VIsKg5fuAkgKSrAAknOZBOKHV5ydRVGKRzi4DBADWyN4u3xb1k6mosrJLjtikgWkRJdodrwINuEVAViGV7jK8NTQRSOlOXycBjgl8pN1tjnwPs2rjP6yY6Vu2DwWVgIEC32gMCQsCm5dsx+AV4wO3eYBLgsISI3F+URjfQoUpv9LcpQf8BKgJ6Mq47n/vLMnYX6hEgSaC6w80Axveeboe9dT6Ds4K0gqWbpnswqBfI9vgLJtA4h30Kx/m2AE3sFlh3TDtGbEPkKvBcoHeIZAX2AiuAj/E+NwrQfgBXCdDeI4OGwfbKzAZAdbxrzivuGOwGHgomApIBIRJOlJe74bwkMiU+zrZ4MBHwPqC3QfyiCWgniG2C2qaqKkKDYsH4ykwKgC0rd5LhrYJ35Hi+b8oxfeh87PZYbY7UcW2MCgsJ9357JAgJeAY4CxAWEsbsUYuolbOFOj83jegSPTcu2WbXdSEaQBslRnaeaHMND1A12N8bfBXoBYRgoOVKr8FIzJzUfxZav/X6jHZ7XTxzCbxxDKgPfAXIawt9MFNienHycaAgMB64RMKIBrYCXUwmmQzv2uMoMB14IzG/OZrESFR/A9mA7EBq4PM7X8aCnYDgt3sE/B9q27TUDuNHLQAAAABJRU5ErkJggg==" alt="" />
                <p className='text-white text-2xl'>Premier League</p>
            </div>

            <div className="overflow-x-auto scrollbar-hide">
                <table className="w-full text-sm text-left border-collapse min-w-[600px]">
                    <thead>
                        <tr className="text-gray-500 border-b border-gray-800">
                            <th className="py-3 px-2 font-medium sticky left-0 bg-[#1a1a1a] z-10">Club</th>
                            <th className="py-3 px-1 text-center font-medium">MP</th>
                            <th className="py-3 px-1 text-center font-medium">W</th>
                            <th className="py-3 px-1 text-center font-medium">D</th>
                            <th className="py-3 px-1 text-center font-medium">L</th>
                            <th className="py-3 px-1 text-center font-medium">GF</th>
                            <th className="py-3 px-1 text-center font-medium">GA</th>
                            <th className="py-3 px-1 text-center font-medium">GD</th>
                            <th className="py-3 px-1 text-center font-bold text-white">Pts</th>
                            <th className="py-3 px-4 text-center font-medium">Last 5</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teams.map((team) => (
                            <tr key={team.rank} className="border-b border-gray-800/50 hover:bg-white/[0.02] transition-colors">
                                <td className="py-4 px-2 whitespace-nowrap sticky left-0 bg-[#1a1a1a] z-10">
                                    <div className="flex items-center gap-3">
                                        <span className="w-4 text-gray-500 text-xs">{team.rank}</span>
                                        <img src={team.logo} alt="" className="w-6 h-6 object-contain" />
                                        <span className="font-semibold text-gray-100">{team.name}</span>
                                    </div>
                                </td>
                                <td className="py-4 px-1 text-center text-gray-400">{team.mp}</td>
                                <td className="py-4 px-1 text-center text-gray-400">{team.w}</td>
                                <td className="py-4 px-1 text-center text-gray-400">{team.d}</td>
                                <td className="py-4 px-1 text-center text-gray-400">{team.l}</td>
                                <td className="py-4 px-1 text-center text-gray-400">{team.gf}</td>
                                <td className="py-4 px-1 text-center text-gray-400">{team.ga}</td>
                                <td className="py-4 px-1 text-center text-gray-400">{team.gd}</td>
                                <td className="py-4 px-1 text-center font-bold text-white">{team.pts}</td>
                                <td className="py-4 px-4">
                                    <div className="flex items-center justify-center gap-1">
                                        {team.form.map((res, i) => (
                                            <FormIcon key={i} type={res} />
                                        ))}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Footer */}
            <div className="bg-[#1a1a1a] p-4 mt-4 font-sans border-t border-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
                    {/* Last 5 matches Section */}
                    <div className="flex flex-col gap-2">
                        <h3 className="text-gray-100 text-sm font-bold mb-1">Last 5 matches</h3>

                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                                <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-white"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            </div>
                            <span className="text-gray-400 text-xs">Win</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center">
                                <div className="w-2 h-0.5 bg-white rounded-full"></div>
                            </div>
                            <span className="text-gray-400 text-xs">Draw</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                                <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-white"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                            </div>
                            <span className="text-gray-400 text-xs">Loss</span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default LeagueTableWithForm;