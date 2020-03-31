const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var Discord = require('discord.io');
var logger = require('winston');
var quotes = ["Why aren’t we smart? We used to be brilliant.","Part of the beauty of me is that I am very rich.","When was the last time you saw a Chevrolet in Tokyo?","I’m not a schmuck.","I do not wear a rug. My hair is one hundred percent mine.","Let me tell you, I’m a really smart guy.","Sometimes your best investments are the ones you don’t make.","A certificate of live birth is not the same thing by any stretch of the imagination as a birth certificate.","My fingers are long and beautiful, as, it has been well been documented, are various other parts of my body.","Some people call me lucky, but I know better.","I love beautiful women, and beautiful women love me. It has to be both ways.","They’re sending people who have lots of problems. They bring in drugs, they bring in crime, they’re rapists. I assume some are good people. It’s got to stop, and it’s got to stop fast.","I have a great relationship with the blacks. I’ve always had a great relationship with the blacks.","Laziness is a trait in blacks.","A well-educated black has a tremendous advantage over a well-educated white in terms of the job market. I think sometimes a black may think they don’t have an advantage or this and that…I’ve said on one occasion, even about myself, if I were starting off today, I would love to be a well-educated black, because I believe they do have an actual advantage.","I am the least racist person there is. And I think most people that know me would tell you that. I am the least racist.","The concept of global warming was created by and for the Chinese in order to make U.S. manufacturing non-competitive.","It’s like taking the New England Patriots and Tom Brady and have them play your high school football team. That’s the difference between our leaders and China’s leaders.","My twitter has become so powerful that I can actually make my enemies tell the truth.","It’s freezing and snowing in New York—we need global warming!","People are tired of these nice people.","This very expensive GLOBAL WARMING bullshit has got to stop. Our planet is freezing, record low temps,and our GW scientists are stuck in ice.",".@ariannahuff is unattractive both inside and out. I fully understand why her former husband left her for a man—he made a good decision.","By the way, I have great respect for China. I have many Chinese friends. They live in my buildings all over the place.","I will build a great wall — and nobody builds walls better than me, believe me —and I’ll build them very inexpensively. I will build a great, great wall on our southern border, and I will make Mexico pay for that wall. Mark my words.","Free trade is terrible. Free trade can be wonderful if you have smart people. But we have stupid people.","Why is Obama playing basketball today? That is why our country is in trouble!","How come every time I show anger, disgust or impatience, enemies say I had a tantrum or meltdown—stupid or dishonest people?","Black guys counting my money! I hate it. The only kind of people I want counting my money are little short guys that wear yarmulkes every day.","In order to get elected, @BarackObama will start a war with Iran.","Sadly, because president Obama has done such a poor job as president, you won’t see another black president for generations!","I’ve always been a fan of Steve Jobs, especially after watching Apple stock collapse w/out him—but the yacht he built is truly ugly.","An ‘extremely credible source’ has called my office and told me that @BarackObama’s birth certificate is a fraud.","I’ll tell you, it’s Big Business. If there is one word to describe Atlantic City, it’s Big Business. Or two words—Big Business.","We have nobody in Washington that sits back and said, you’re not going to raise that fucking price.","Rosie O’Donnell’s disgusting both inside and out. You take a look at her, she’s a slob. She talks like a truck driver, she doesn’t have her facts, she’ll say anything that comes to her mind….I mean she’s basically a disaster.","Our great African American President hasn’t exactly had a positive impact on the thugs who are so happily and openly destroying Baltimore!","More votes equals a loss…revolution!","You know, it really doesn`t matter what [the media] write as long as you`ve got a young and beautiful piece of ass.","Well, somebody’s doing the raping, Don! I mean somebody’s doing it! Who’s doing the raping? Who’s doing the raping?","The more you know, the more you realize how much you don’t know.","The second-greatest day of a man’s life is the day he buys a yacht, but the greatest day of a man’s life is the day he sells it.","Buy companies only when you understand what they do.","All of the women on ‘The Apprentice’ flirted with me—consciously or unconsciously. That’s to be expected.","I get up, take a shower and wash my hair. Then I read the newspapers and watch the news on television, and slowly the hair dries. It takes about an hour. I don’t use the blow dryer. Once it’s dry I comb it. Once I have it the way I like it—even though nobody else likes it—I spray it and it’s good for the day.","Sorry losers and haters, but my IQ is one of the highest—and you all know it! Please don’t feel so stupid or insecure, it’s not your fault.","And did you notice that baby was crying through half of the speech and I didn’t get angry? Not once. Did you notice that? That baby was driving me crazy. I didn’t get angry once because I didn’t want to insult the parents for not taking the kid out of the room!","I think the only difference between me and the other candidates is that I’m more honest and my women are more beautiful.","It’s amazing how people can talk about me but I’m not allowed to talk about them.","In life you have to rely on the past, and that’s called history"]
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: process.env.TOKEN,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'pong!'
                });
            break;
			case 'quote':
				var q = Math.floor(Math.random() * quotes.length);
                bot.sendMessage({
                    to: channelID,
                    message: quotes[q]
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});
