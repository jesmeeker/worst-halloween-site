
/////comments are being made.....


const database = {
    movies: [
        {
            id: 1, 
            synopsis: "The Orphanage centers on Laura (Belén Rueda) who purchases her beloved childhood orphanage with dreams of restoring & reopening the abandoned facility as a place for disabled children.", 
            title: "The Orphanage", 
            length: "1 h 45 min", 
            img: "/photos/orphange.jpg", 
            link: `<a href="https://www.amazon.com/16-Color-Activated-Detection-Birthday-Gadgets/dp/B07L2Y62G2/ref=sr_1_7?keywords=Random+Cool+Stuff&qid=1666814756&qu=eyJxc2MiOiI3Ljg3IiwicXNhIjoiNy41MyIsInFzcCI6IjYuMjYifQ%3D%3D&sr=8-7">Click</a>`
        },
        {
            id: 2,
            synopsis: "Based on a true story, ghost hunters Lorraine and Ed Warren help a family terrorized by a dark spirit.",
            title: "The Conjuring",
            length: "1 h 51 min",
            img: "/photos/conjuring.jpg",
            link: `<a href="https://puginarug.com/">Click</a>`
        },
        {
            id: 3, 
            synopsis: "Young Damien Thorn is believed to be the Antichrist after a series of violent deaths occur around the family that all involve the sinister five-year-old.", 
            title: "The Omen", 
            length: "1 h 50 min" , 
            img: "/photos/omen.jpg", 
            link: `<a href="https://youtu.be/dQw4w9WgXcQ">Click</a>`
        },
        {
            id: 4, 
            synopsis: "In classic horror film genre that launched a movie franchise, a pedophile who was murdered by a lynch mob returns years later in terrifying nightmares of his killers' teenage children.", 
            title: "A Nightmare on Elm Street", 
            length: "1 h 31 min", 
            img: "/photos/nightmare_on_elm.jpg", 
            link: `<a href="https://alwaysjudgeabookbyitscover.com/">Click</a>`
        },
        {
            id: 5, 
            synopsis: "The tale of a spelunking gone wrong still has a cult following today. If you don't have claustrophobia now, you absolutely will after watching the cramped cave horror of The Descent.", 
            title: "The Descent", 
            length: "1 h 38 min", 
            img: "/photos/descent.jpg", 
            link: `<a href="http://v1.windows93.net/">Click</a>`
        },
        {
            id: 6, 
            synopsis: "If The Exorcist can still make its original 1973 viewers shudder at the thought of it decades later, there’s clearly something possessing about this film—which is based on the last known Catholic-sanctioned exorcism in the U.S.", 
            title: "The Exorcist", 
            length: "2 h 1 min", 
            img: "/photos/exorcist.jpg", 
            link: `<a href="http://www.bristlr.com/">Click</a>`
        },
        {
            id: 7, 
            synopsis: "Student Helen Lyle learns of the terrifying local legend of The Candyman - a hooked serial killer who appears when you say his name in a mirror, five times.", 
            title: "The Candyman", 
            length: "1 h 38 min", 
            img: "/photos/candyman.jpg", 
            link: `<a href="https://pointerpointer.com/">Click</a>`
        },
        {
            id: 8, 
            synopsis: "A couple on the outs arrives at a cozy childhood home in the woods, only to be terrorized by a group of masked intruders. The random, motiveless violence is what makes the whole thing so brutal.", 
            title: "The Strangers", 
            length: "1 h 25 min", 
            img: "/photos/strangers.jpg", 
            link: `<a href="https://www.amazon.com/Elmers-Disappearing-Purple-School-E562/dp/B00143SNPG/ref=zg_bs_arts-crafts_23/142-3285647-5902325?pd_rd_i=B0B5YQL66Z&psc=1&tag=feeling-primey-20">Click</a>`
        }
    ],
    reviews: [
        {
            id: 1,
            movieId: 1,
            text: "I did not like this movie! I tried to watch it with my young son and he was traumatized! No one watch this!",
            rating: 1,
            user: "KarynBuchanan77"
        },
        {
            id: 2,
            movieId: 1,
            text: "Absolutely brilliant film from start to finish. The main lady is superb. I'd say this was a ghost story, although it's usually labelled a horror. Don't be fooled into thinking it's not scary though. It's put together well and beautifully executed. The ending will haunt you, in a way you've never felt before.",
            rating: 5,
            user: "GhostLover2000"
        },
        {
            id: 3,
            movieId: 1,
            text: "That a haunted house horror movie could bring tears to your eyes was something I had never imagined. Extremely emotional,  poignant as well as scary movie that no James Wan would ever be able to conjure.  Hats off to the makers of this masterpiece.",
            rating: 5,
            user: "MarkzPatel"
        },
        {
            id: 4,
            movieId: 1,
            text: "IT WAS A REALLY GOOD MOVIES TO ME.I REALLY ENJOYED IT.THE CLIMAX WAS HEART TOUCHING AND EMOTIONAL.INFACT THE STORY IS VERY MUCH REAL.MOST OF THE ORPHANAGE HOLDERS DOESNT USE TO TREAT THE CHILDRENS WHO ARE LIVING THERE IN A GOOD MANNER.THAT LADY THOUGHT THAT OTHER CHILDRENS KILLED HER SON.BUT IT ISN'T.HE DIED BY THE TIDES;AND THAT LADY KILLED OTHER CHILDRENS IN SAKE OF REVENGE:AND MADE NO CHILDRENS ON THE ORPHANAGE TO RECEIVE TRUE LOVE.ITS NOT MUCH HORRORTIC NOR I WILL SAY THIS AS THRILLER.THIS IS A GOOD DRAMA MOVIE ALL I WILL SAY.THE GAME THAT THE ACTRESS PLAYED WITH THE CHILDRENS(TREASURE HUNT)IS NOT UNDERSTANDABLE AND I WILL SAY THAT THERE NO NEED OF IT.THE DIRECTOR DOESNT GOT THAT A BIT CORRECT.THE MUSIC IS REALLY GOOD,MAKING US TO FEEL SORROW FOR THAT CHILDREN.I WILL RECOMMEND THIS FILM FOR SURE BUT A BIT OF UNUSUAL SCENES AND DIRECTORIAL MISTAKES ARE THERE FOR SURE.",
            rating: 4,
            user: "ZoomerBoy99"
        },
        {
            id: 5,
            movieId: 2,
            text: "One of the most boring and overrated 'horror' movies ever made. Nothing even remotely scary or interesting here. It would be torturous to have to sit through this tripe again. It's totally embarrassing what passes as horror nowadays.",
            rating: 1,
            user: "ChetLions"
        },
        {
            id: 6,
            movieId: 2,
            text: "A gripping, intensely frightening watch. Director James Wan has infused this movie with a ghastly sense of dread that continuously grows worse as the film goes on, and a seemingly unending supply of creative, tooth rattling scares. In addition, a big reason why the film is so sweat inducing is because of the brilliant acting and writing of Wan's characters. You genuinely feel and root for every character in this film, as they make their way through the hellish events they are experiencing.",
            rating: 5,
            user: "Kaimatsu44"
        },
        {
            id: 7,
            movieId: 2,
            text: "I must say, developing horror movies is a tough mission, especially because horror films require strong acting, intense atmosphere and music, memorable characters, and a nice storyline: The Conjuring has all of it contained into a one whole movie. I liked most of the bit of this movie. The scares were surprising and honestly creepy. The music was even creepier. And the locations made it feel like a true horror movie set in the required time. I highly recommend this movie.",
            rating: 5,
            user: "LindaBurgers"
        },
        {
            id: 8,
            movieId: 3,
            text: "A truly classical and amazing horror movie. This is the kind of true scariness you just don't see nowadays. The story, the soundtrack, and the casting are absolutely perfect, especially with Gregory Peck and Billie Whitelaw, the latter of who delivered the scariest performance in a good way. If you want to feel REAL fear with no predictable plot points, this is definitely the movie for you!",
            rating: 5,
            user: "ookyspookyguy"
        },
        {
            id: 9,
            movieId: 3,
            text: "A bit dated now but in its day a classic. Allways enjoy Gregory Peck. Still watchable after all these years and thankfully doesn't rely on predictable and boring blood and gore for surprizes and twists unlike most horror of today.",
            rating: 3,
            user: "MisterSinister84"
        },
        {
            id: 10,
            movieId: 3,
            text: "This movie gave me chills and made me feel uneasy throughout.. it just feels evil.. it's unsettling to watch especially if you grew up christian and you've heard about stories of the antichrist. Great movie and a must watch I'd say!",
            rating: 4,
            user: "GhostLover2000"
        },
        {
            id: 11,
            movieId: 3,
            text: "A movie with the worst ending ever. The kid kills everyone if you want to know the ending. This a movie that I would never watch if I knew its clown ending!",
            rating: 1,
            user: "ChetLions"
        },
        {
            id: 12,
            movieId: 3,
            text: "Looking Good for Its Age. Wanted to watch something for halloween with my 15 year old son. As a bit of escapist nonsense it holds up well. Much as I like Gregory Peck he is really wooden in this film but its enjoyable non the less.",
            rating: 4,
            user: "LindaBurgers"
        },
        {
            id: 13,
            movieId: 4,
            text: "This is a very good and artistic movie from the 1980's. The plot line is very original than you would think such as a killer who kills you in your sleep while wearing a bladed glove which is known as Freddy Krueger. This is one of my number 1 favorite horror film of all. Plus the fact, Freddy Krueger is also my number 1 favorite horror icon along with other villains.",
            rating: 5,
            user: "JoBroski"
        },
        {
            id: 14,
            movieId: 4,
            text: "hi i hate your show my mom hates it do not make another one plese thank you.",
            rating: 1,
            user: "supersammybuch"
        },
        {
            id: 15,
            movieId: 4,
            text: "Pointless nonsense! All it does is satisfy some strange bloodlust desire in the young. Okay if you can take unbelievable, teenage soap styled anxiety. If this is even art, it's dodgy.",
            rating: 1,
            user: "KarynBuchanan77"
        },
        {
            id: 16,
            movieId: 4,
            text: "THE FIRST NIGHTMARE ON ELM STREET WAS OKAY BUT THE REST JUST SUCKED I PREFER FRIDAY THE 13th AND HALLOWEEN WHICH ARE CLASSIC HORROR SLASHERS I LIKED THE JASON V FREDDY MOVIE BUT FREDDY A CHILD KILLER' THAT'S WHY I DON'T LIKE NIGHTMARE ON ELM STREET MOVIE'S",
            rating: 3,
            user: "ZoomerBoy99"
        },
        {
            id: 17,
            movieId: 5,
            text: "I saw this on its opening weekend back in 2005 and it's just as terrifying tonight as it was then! The writing and special effects are so intense and incredible! Not only do you feel the claustrophobia closing in on you as well the ladies but then Neil Marshall throws in flesh eating monsters to really screw with your fear and to top it off they have to fight them back without any weapons abs in the middle of the dark while still trying to get the heck out!!! Love that it's an all women cast whose acting ability blows it it all out of the park! It's #9 scariest movie of all time for me!!! SPECTACULAR!!!!!",
            rating: 5,
            user: "Kaimatsu44"
        },
        {
            id: 18,
            movieId: 5,
            text: "Perfect for anyone desensitized to horror movies and looking for a real scare. You'll be on the edge of your seat the entire movie! Not to mention some badass women.",
            rating: 4,
            user: "Mimi1993"
        },
        {
            id: 19,
            movieId: 5,
            text: "Too many attempts at jump scares so when it actually begins to get “scary” the jump scares at the point are kaput. Pretty boring movie up until the gore.",
            rating: 2,
            user: "ChetLions"
        },
        {
            id: 20,
            movieId: 6,
            text: "Gold standard. Horrors used to go so long between classics. Seems like nearly a decade would go by before we'd get another really good one. From The Haunting to The Exorcist to Carrie I waited forEVER for another truly frightening flick. Enter the 70s and by the new millennium we have them flying thick and fast, which has my horror-lovin' heart full! This giant gem had to feed my horror daydreams for years. First the book made me SWEAR my bed was shaking. Then the movie just took over. It's a moving story of a sweet tween who is transformed into a disgusting, murderous demon too clever by half. I've just watched it for easily the 11th time and I never took my eyes away.",
            rating: 5,
            user: "MisterSinister84"
        },
        {
            id: 21,
            movieId: 6,
            text: "Worst movie ever please guys don't watch and waste your internet and time i wasted my 2hours because of this worst movie",
            rating: 1,
            user: "supersammybuch"
        },
        {
            id: 22,
            movieId: 6,
            text: "I would strongly recommend not watching this movie unless you are a religious person who wants to be shocked. The Exorcist is made to shock people,not scare them. There are very few scenes that even have the intent of frightening viewers instead of shocking them with a possessed girl saying blasphemy things and such.",
            rating: 1,
            user: "KarynBuchanan77"
        },
        {
            id: 23,
            movieId: 6,
            text: "This film doesn't need much of an introduction. Termed as the scariest movie of it's time, it is a big name in the horror movie genre. It may not be one of the scariest films of all time but the masterfully executed storyline with a new ideology made it all the more famous.",
            rating: 4,
            user: "ookyspookyguy"
        },
        {
            id: 24,
            movieId: 6,
            text: "Wow, so I just watched this movie for the first time ever, I am astounded. As a 16 year old, one of the best horror films I have ever seen. They were so creative with the camera techniques which added so much to the feeling of unease. I was always on edge, super intrigued about what would come next. The music is perfectly fitting, and is only used at certain times, proving that this movie doesn't need it's music to be scary, and can achieve this with the already outstanding visual effects, techniques and small details that I noticed.",
            rating: 5,
            user: "BigManNick"
        },
        {
            id: 25,
            movieId: 7,
            text: "Best part of the film is the credits..that's if you make it that far without leaving or falling asleep. Not at all scary nor interesting and has absolutely no story line that makes any sense. Save your pennies and go buy some sweets instead, that's the only type of candy man that's any good round here.",
            rating: 1,
            user: "JoBroski"
        },
        {
            id: 26,
            movieId: 7,
            text: "I enjoyed watching Candyman. It is both, spooky and creepy. What I mainly enjoyed about the movie is the development of the plot at psychological level. The portrayal of urban legend by Tony Todd was great and acting by Virginia Madsen is also good. You can feel her in what she is going through.",
            rating: 4,
            user: "LindaBurgers"
        },
        {
            id: 27,
            movieId: 7,
            text: "This more than a horror movie. It's about the real life horrors of racism, police brutality, and lynching. Jordan Peel ( Get Out and Us) was one of the writers. There are many layers to this movie and it bears watching more than once.",
            rating: 5,
            user: "MisterSinister84"
        },
        {
            id: 28,
            movieId: 8,
            text: "With the ability to employ a little bit of imagination this movie works extremely well in my opinion. The fact is, yes, these kinds of things do happen. An odd knocking on the door, your door, late at night, it has happened to a lot more people than we'd care to think about. Hell, I just knocked on my neighbor's door at 03:20 recently. It was because their damn dog hadn't stopped barking for 5 hours straight. I had no intention of torturing or killing them. Although,  maybe it wouldn't be a bad idea... Good, original narrative. Highly recommended for true thriller enthusiasts.",
            rating: 5,
            user: "ookyspookyguy"
        },
        {
            id: 29,
            movieId: 8,
            text: "Well directed well filmed extremely memorable, unsettling, making you feel uncomfortable,great character development and acting, the story was fantastic and realistic. It high-tens the senses and gives you the absolute chills. This movie stayed true to the horror genre in such a unique way. Considering how the horror genre has changed in the last decade or so from just giving us bad jump scare after jump scare this movie just adds so much. I would 100% recommend it",
            rating: 5,
            user: "Mimi1993"
        },
        {
            id: 30,
            movieId: 8,
            text: "One of the worst movies I have ever seen. To the people who applaud the decision making and say it's realistic really...... rewatch the film. This movie has to lean on jump scares to provoke anything because it has no plot. Horrible directing, they were bound up at the end wearing different clothing than what they were “captured” wearing. Come on people.",
            rating: 1,
            user: "ChetLions"
        },
        {
            id: 31,
            movieId: 8,
            text: "not a great movie, basically this is one of those movies with the spooky characters in the background who are never seen by the protagonist just the audience. Movies like these aren't scary or enjoyable to watch because the killers only do weird things to scare the audience in unrealistic ways. It basically a bunch of slow build up jump scares that lead to nothing",
            rating: 2,
            user: "MarkzPatel"
        }
    ]
}
