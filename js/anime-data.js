const animeData = [
    {
        title: "Fullmetal Alchemist: Brotherhood",
        image: "svg/anime-placeholder.svg",
        plot: "Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms.",
        year: 2009
    },
    {
        title: "Death Note",
        image: "svg/anime-placeholder.svg",
        plot: "A high school student discovers a supernatural notebook that allows him to kill anyone by writing the victim's name while picturing their face.",
        year: 2006
    },
    {
        title: "Attack on Titan",
        image: "svg/anime-placeholder.svg",
        plot: "In a world where humanity lives inside cities surrounded by enormous walls due to the Titans, gigantic humanoid creatures who devour humans seemingly without reason, a young boy vows to retake the world after a Titan brings tragedy to his home.",
        year: 2013
    },
    {
        title: "Steins;Gate",
        image: "svg/anime-placeholder.svg",
        plot: "A group of friends create a device that can send messages to the past, altering the flow of history and facing the consequences of their actions.",
        year: 2011
    },
    {
        title: "My Hero Academia",
        image: "svg/anime-placeholder.svg",
        plot: "In a world where people with superpowers (known as 'Quirks') are the norm, a boy without powers dreams of becoming a superhero himself.",
        year: 2016
    },
    {
        title: "One Punch Man",
        image: "svg/anime-placeholder.svg",
        plot: "The story of Saitama, a hero who can defeat any enemy with a single punch but seeks a worthy opponent after growing bored by a lack of challenge.",
        year: 2015
    },
    {
        title: "Code Geass",
        image: "svg/anime-placeholder.svg",
        plot: "An exiled prince gains the power to control others and uses it to launch a rebellion against the powerful Holy Britannian Empire.",
        year: 2006
    },
    {
        title: "Hunter x Hunter (2011)",
        image: "svg/anime-placeholder.svg",
        plot: "Gon Freecss aspires to become a Hunter, an exceptional being capable of greatness. With his friends and his potential, he seeks for his father who left him when he was younger.",
        year: 2011
    },
    {
        title: "Neon Genesis Evangelion",
        image: "svg/anime-placeholder.svg",
        plot: "In a post-apocalyptic world, a paramilitary organization called NERV is fighting against giant beings called Angels using giant mechs piloted by teenagers.",
        year: 1995
    },
    {
        title: "Cowboy Bebop",
        image: "svg/anime-placeholder.svg",
        plot: "The futuristic misadventures and tragedies of an easygoing bounty hunter and his partners.",
        year: 1998
    },
    {
        title: "Naruto",
        image: "svg/anime-placeholder.svg",
        plot: "Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the village's leader and strongest ninja.",
        year: 2002
    },
    {
        title: "One Piece",
        image: "svg/anime-placeholder.svg",
        plot: "Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger.",
        year: 1999
    },
    {
        title: "Dragon Ball Z",
        image: "svg/anime-placeholder.svg",
        plot: "After learning that he is from another planet, a warrior named Goku and his friends are prompted to defend it from an onslaught of extraterrestrial enemies.",
        year: 1989
    },
    {
        title: "Sword Art Online",
        image: "svg/anime-placeholder.svg",
        plot: "In the near future, a Virtual Reality Massive Multiplayer Online Role-Playing Game (VRMMORPG) called Sword Art Online has been released where players control their avatars with their bodies using a piece of technology called Nerve Gear.",
        year: 2012
    },
    {
        title: "Tokyo Ghoul",
        image: "svg/anime-placeholder.svg",
        plot: "A Tokyo college student is attacked by a ghoul, a superpowered human who feeds on human flesh. He survives, but has become part ghoul and becomes a fugitive on the run.",
        year: 2014
    },
    {
        title: "Demon Slayer: Kimetsu no Yaiba",
        image: "svg/anime-placeholder.svg",
        plot: "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
        year: 2019
    },
    {
        title: "Your Name",
        image: "svg/anime-placeholder.svg",
        plot: "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
        year: 2016
    },
    {
        title: "Spirited Away",
        image: "svg/anime-placeholder.svg",
        plot: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
        year: 2001
    },
    {
        title: "Death Parade",
        image: "svg/anime-placeholder.svg",
        plot: "After death, humans go to either heaven or hell. But for some, at the instant of their death, they arrive at the Quindecim, a bar attended by the mysterious white-haired Decim.",
        year: 2015
    },
    {
        title: "Psycho-Pass",
        image: "svg/anime-placeholder.svg",
        plot: "In a futuristic Japan, the Sibyl System is charged with keeping the peace. Using extensive surveillance and biological monitoring to gauge the likelihood that individuals will commit a crime, the police are able to use weapons called Dominators to remove potential criminals from the population before they become a problem.",
        year: 2012
    },
    {
        title: "Haikyuu!!",
        image: "svg/anime-placeholder.svg",
        plot: "Determined to be like the volleyball championship's star player Shouyou, a short boy nicknamed 'the small giant,' joins his school's volleyball club.",
        year: 2014
    },
    {
        title: "Mob Psycho 100",
        image: "svg/anime-placeholder.svg",
        plot: "A psychic middle school boy tries to live a normal life and keep his growing powers under control, even though he constantly gets into trouble.",
        year: 2016
    },
    {
        title: "The Promised Neverland",
        image: "svg/anime-placeholder.svg",
        plot: "A group of the smartest kids at a seemingly perfect orphanage uncover its dark truth when they break a rule to never leave the orphanage grounds.",
        year: 2019
    },
    {
        title: "Re:Zero − Starting Life in Another World",
        image: "svg/anime-placeholder.svg",
        plot: "Shortly after being summoned to a new world, Subaru Natsuki and his new female companion are brutally murdered. But then he awakes to find himself in the same alley, with the same thugs, the same girl, and the day begins to repeat.",
        year: 2016
    },
    {
        title: "Erased",
        image: "svg/anime-placeholder.svg",
        plot: "After finding his mother killed, Satoru's time-traveling ability sends him back 18 years for a chance to prevent her death and those of three classmates.",
        year: 2016
    },
    {
        title: "Assassination Classroom",
        image: "svg/anime-placeholder.svg",
        plot: "A powerful creature claims that within a year, Earth will be destroyed by him, but he offers mankind a chance by becoming a homeroom teacher where he teaches his students about how to kill him.",
        year: 2015
    },
    {
        title: "Black Clover",
        image: "svg/anime-placeholder.svg",
        plot: "Asta and Yuno were abandoned together at the same church and have been inseparable since. As children, they promised that they would compete against each other to see who would become the next Emperor Magus.",
        year: 2017
    },
    {
        title: "Violet Evergarden",
        image: "svg/anime-placeholder.svg",
        plot: "An emotionally detached soldier learns to reconnect with her emotions when she becomes a ghostwriter for people who cannot write.",
        year: 2018
    },
    {
        title: "No Game No Life",
        image: "svg/anime-placeholder.svg",
        plot: "Siblings Sora and Shiro are inseparable gaming geniuses who are transported to a world where all disputes are settled through games.",
        year: 2014
    },
    {
        title: "Parasyte: The Maxim",
        image: "svg/anime-placeholder.svg",
        plot: "17-year-old Shinichi Izumi is partially infected by a Parasyte, monsters that butcher and consume humans. He must learn to co-exist with the creature if he is to survive both the life of a Parasyte and human, as part monster, part person.",
        year: 2014
    },
    {
        title: "Gurren Lagann",
        image: "svg/anime-placeholder.svg",
        plot: "Two teenagers pilot an enormous mecha to combat a powerful enemy while inspiring their comrades to fight and believe in themselves.",
        year: 2007
    },
    {
        title: "JoJo's Bizarre Adventure",
        image: "svg/anime-placeholder.svg",
        plot: "The story of the Joestar family, who are possessed with intense psychic strength, and the adventures each member encounters throughout their lives.",
        year: 2012
    },
    {
        title: "Noragami",
        image: "svg/anime-placeholder.svg",
        plot: "A minor god seeking to gain widespread worship teams up with a human girl he saved to gain fame, recognition and at least one shrine dedicated to him.",
        year: 2014
    },
    {
        title: "Made in Abyss",
        image: "svg/anime-placeholder.svg",
        plot: "A young girl ventures into a mysterious Abyss in search of her mother, befriending a mysterious robot along the way.",
        year: 2017
    },
    {
        title: "Puella Magi Madoka Magica",
        image: "svg/anime-placeholder.svg",
        plot: "A group of middle school girls are led into dangerous and dark contracts by a cat-like being named Kyubey, who offers a wish in exchange for them becoming magical girls.",
        year: 2011
    },
    {
        title: "Your Lie in April",
        image: "svg/anime-placeholder.svg",
        plot: "A piano prodigy who lost his ability to play after suffering a traumatic event in his childhood is forced back into the spotlight by an eccentric girl with a secret of her own.",
        year: 2014
    },
    {
        title: "Bakemonogatari",
        image: "svg/anime-placeholder.svg",
        plot: "Third-year high school student Koyomi Araragi is human again. Cured of his vampirism, he seeks to help other supernaturally afflicted girls.",
        year: 2009
    },
    {
        title: "Samurai Champloo",
        image: "svg/anime-placeholder.svg",
        plot: "Fuu, a waitress who works in a teahouse, rescues two master swordsmen, Mugen and Jin, from their execution to help her find the 'samurai who smells of sunflowers.'",
        year: 2004
    },
    {
        title: "Fate/Zero",
        image: "svg/anime-placeholder.svg",
        plot: "Seven mages summon legendary heroes to fight in a secret war for the Holy Grail, a wish-granting chalice.",
        year: 2011
    },
    {
        title: "Monster",
        image: "svg/anime-placeholder.svg",
        plot: "Dr. Kenzo Tenma, a young but extremely talented neurosurgeon, faces a difficult choice when a prominent politician arrives with a life-threatening condition. Should he save the politician or operate on a critical child patient who arrived first?",
        year: 2004
    },
    {
        title: "Toradora!",
        image: "svg/anime-placeholder.svg",
        plot: "It's a new school year and Ryuuji Takasu discovers that his classmate, Taiga Aisaka, is actually living in an apartment next door to his house.",
        year: 2008
    },
    {
        title: "Kill la Kill",
        image: "svg/anime-placeholder.svg",
        plot: "A young girl arrives at a school of superhumans to find out the truth behind her father's murder.",
        year: 2013
    },
    {
        title: "Clannad",
        image: "svg/anime-placeholder.svg",
        plot: "A high school student who cares little about school or others meets a lonely girl who had to repeat a year while all her friends finished high school. He decides to hang out with her and soon meets more friendly students.",
        year: 2007
    },
    {
        title: "Anohana: The Flower We Saw That Day",
        image: "svg/anime-placeholder.svg",
        plot: "Six childhood friends have grown apart over the years following the death of one of them, Meiko 'Menma' Honma. When suddenly she appears as a ghost to Jinta, he seeks out to fulfill her final wish.",
        year: 2011
    },
    {
        title: "Angel Beats!",
        image: "svg/anime-placeholder.svg",
        plot: "Otonashi awakens only to learn he is dead. A rifle-toting girl named Yuri explains that they are in the afterlife, and Otonashi realizes the only thing he can remember about himself is his name.",
        year: 2010
    },
    {
        title: "Durarara!!",
        image: "svg/anime-placeholder.svg",
        plot: "A young man seeking excitement moves to Ikebukuro, Tokyo, where he gets drawn into the city's less savory side.",
        year: 2010
    },
    {
        title: "Mushishi",
        image: "svg/anime-placeholder.svg",
        plot: "A wandering, all-knowing man assists various denizens of Japan with problems related to supernatural creatures called Mushi.",
        year: 2005
    },
    {
        title: "Natsume's Book of Friends",
        image: "svg/anime-placeholder.svg",
        plot: "Natsume Takashi has the ability to see spirits, which he has long kept secret. However, once he inherits a strange book that belonged to his deceased grandmother, Reiko, he discovers the reason why spirits surround him.",
        year: 2008
    }
];