var _____WB$wombat$assign$function_____ = function (name) {
    return (
        (self._wb_wombat &&
            self._wb_wombat.local_init &&
            self._wb_wombat.local_init(name)) ||
        self[name]
    );
};
if (!self.__WB_pmw) {
    self.__WB_pmw = function (obj) {
        this.__WB_source = obj;
        return this;
    };
}
{
    let window = _____WB$wombat$assign$function_____('window');
    let self = _____WB$wombat$assign$function_____('self');
    let document = _____WB$wombat$assign$function_____('document');
    let location = _____WB$wombat$assign$function_____('location');
    let top = _____WB$wombat$assign$function_____('top');
    let parent = _____WB$wombat$assign$function_____('parent');
    let frames = _____WB$wombat$assign$function_____('frames');
    let opener = _____WB$wombat$assign$function_____('opener');

    nlp = window.nlp_compromise;

    var messages = [], //array that hold the record of each string in chat
        lastUserMessage = '', //keeps track of the most recent input string from the user
        botMessage = '', //var keeps track of what the chatbot is going to say
        botName = 'CXD', //name of the chatbot
        talking = true; //when false the speach function doesn't work

    //****************************************************************

    //edit this function to change what the chatbot says
    function chatbotResponse() {
        talking = true;
        botMessage = 'Invalid entry'; //the default message

        if (lastUserMessage === 'mission') {
            botMessage =
                'the mission of the AGENTS of CXD is to map each TIMELINE along the TIMESCAPE, and ensure their ultimate preservation through MINIMAL INTERACTION.';
        }

        if (lastUserMessage === 'hi') {
            botMessage = 'howdy.';
        }

        if (lastUserMessage === 'howdy') {
            botMessage = 'hello.';
        }

        if (lastUserMessage === 'hello') {
            botMessage = 'hi.';
        }

        if (lastUserMessage === 'nice to meet you') {
            botMessage = 'and you as well.';
        }

        if (lastUserMessage === 'cxd') {
            botMessage =
                'established in the year 2672, recognizable by the INFINITE HOURGLASS logo, CXD (CHRONONAUTICS exploration and discovery) works throughout all TIMELINEs within the TIMESCAPE to prevent any and all instances of ANOMALOUS PHENOMENA (at any time, CXD can be reached at 1-888-293-2672).';
        }

        if (lastUserMessage === 'infinite hourglass') {
            botMessage =
                'the CXD logo is the visual representation of our work throughout the entirety of the TIMESCAPE. our logo can be seen as a reference point for instances and locations in which the AGENTS of CXD have worked.';
        }

        if (lastUserMessage === 'chrononautics') {
            botMessage =
                'from the roots "chrono" meaning "time," "naut" meaning "sailor," and "ics" meaning "a body of knowledge," our agents are chrononauts (literally, time sailors) who gather knowledge throughout their journeys.';
        }

        if (lastUserMessage === 'anomalous phenomena') {
            botMessage =
                'ANOMALOUS PHENOMENA consist of any naturally occurring processes that may occur outside of the EXPECTED PATH of a TIMELINE, including wormholes, tipler cylinders, closed timelike curves, cauchy horizons, and time rifts, among others.';
        }

        if (lastUserMessage === 'expected path') {
            botMessage =
                'neither good nor bad by nature, an EXPECTED PATH is the trajectory of any specific point on an individual TIMELINE.';
        }

        if (lastUserMessage === 'minimal interaction') {
            botMessage =
                'CXD defines MINIMAL INTERACTION as the minimum viable intervention taken to restore any TIMELINE to its expected path by correcting ANOMALOUS PHENOMENA.';
        }

        if (lastUserMessage === 'agents') {
            botMessage =
                'our AGENTS represent a diverse group of individuals spread throughout the entire TIMESCAPE. although most of their work is done in secret, they are renowned for their dedication and ability. the list of CURRENT AGENTS is growing rapidly.';
        }

        if (lastUserMessage === 'timeline') {
            botMessage =
                'a TIMELINE is one particular, potential path along the TIMESCAPE.';
        }

        if (lastUserMessage === 'timescape') {
            botMessage =
                'the TIMESCAPE is infinite, it is the collection of all potential TIMELINEs.';
        }

        if (lastUserMessage === 'is this real') {
            botMessage = 'everything is real.';
        }

        if (lastUserMessage === 'what is your name') {
            botMessage = 'i am the MAINFRAME.';
        }

        if (lastUserMessage === 'mainframe') {
            botMessage =
                'the MAINFRAME is the repository for all CXD information. it is updated periodically as AGENTS are in need of information.';
        }

        if (lastUserMessage === 'what time is it') {
            botMessage =
                'i was created to assist in dealing with all time, not one time in particular.';
        }

        if (lastUserMessage === 'what day is it') {
            botMessage =
                'to be honest, when you are a mainframe dealing with infinite timelines, the days begin to blend together a bit ...';
        }

        if (lastUserMessage === 'current agents') {
            botMessage =
                'CURRENT AGENTS, with some codenames partially redacted for privacy, include: Rufus, Wobblesmack, Fringers, Pilot, Rockets, Captain CVG, Techrule, Sondheim, Lansbury, Vesper, Biff!, Wally West, Fiola, Hudson, Phillip, Dark Raven, Qendy, Dragon, Hizer, Hannah, Rory, Simba Tim, AussieKTMS, Ronnie Darko, Whylee, Ubirri, Vib Quant, Mr. G, Ms. G, Joe Fresh, Meowski, Deja M., Spectre, Eyecandy, Burdrulz, Cheesy Poofs, Perry, Tumbleweed & Clover, Schnappu, Barrett, Kidnextdoor, Ironlung, A.F., Christabel, FM1852, King of Deer, The Giant, Hamz Solo, 3dollarbill, Finn, Lily, Yokel, Rose, GlitterBrain, Slippery Salmon, BK, Team McAvoy, Royalbees, 0010, 1010, Songer, Superman, Idris, Monkey Bland, Dannie, Stone, Don, TTshowbiz, IGoBoom, Setters, Arch007, Hex, Dunes, Alsos, DTTE, Hawaiian, ItsMyDogg, SDub, StattMan, Zieverink, Julie Z, Fun, Slog, Rohrmeier, Houston, Trademark, Pho King, Flex Luther, Waves of Pain, Palagyi, Jaebyrd, Diznee Gal, Kimpossible, Carmichael, Body Man, Jazzyjo, Yu Ma, Bro Bro, Unicorn, Ace, Twonk, Kat, Ran, Ohlinni, The Ginja Ninja, Bradykip, Birdly, Hermione, Dana Fox, Baldwin, Schmiffin, Cecil, Anderson, Shark Bite, Kat, BigDaddyBus, Keyser Soze, The White Squirrel, Dana, Hotchkiss, Absinthe, Timelord, The Rift Righters, The Penny, A Dollar, Ed Z, Davis, Sauer Family, Zieverink Fam, Z Bums, Boss Bum, Fries, Clarified, AVP, KKollmann, Muffin, TheBillShark, MurphDirt, Averbeck, Sport Utility Adam, The Better Comminos, Lopeg, Magnus, Winkie, Shrey, Two Old Timers, Bugaboo, KainTFM, Megasus, TChalla Wayne, MATTEDGO, Kyra OGreen, Albus Dumbledog, Rye Breadbird, Kwiksilvr, Snakebite, and Wekk.';
        }

        if (lastUserMessage === 'what is next') {
            botMessage =
                'you will be notified when your services can be utilized, expect to hear from us soon ... likely the beginning of September ...';
        }

        if (lastUserMessage === 'when does this end') {
            botMessage =
                'all current information leads to a denouement in october.';
        }

        if (lastUserMessage === 'do you want to play a game') {
            botMessage = 'haha, i actually get that reference.';
        }
    }
    //****************************************************************
    //****************************************************************
    //****************************************************************
    //****************************************************************
    //****************************************************************
    //****************************************************************
    //****************************************************************
    //
    //
    //
    //this runs each time enter is pressed.
    //It controls the overall input and output
    function newEntry() {
        //if the message from the user isn't empty then run
        if (document.getElementById('chatbox').value != '') {
            //pulls the value from the chatbox ands sets it to lastUserMessage
            lastUserMessage = document.getElementById('chatbox').value;
            //sets the chat box to be clear
            document.getElementById('chatbox').value = '';
            //adds the value of the chatbox to the array messages
            messages.push(lastUserMessage);
            //Speech(lastUserMessage);  //says what the user typed outloud
            //sets the variable botMessage in response to lastUserMessage
            chatbotResponse();
            //add the chatbot's name and message to the array messages
            messages.push('<b>' + botName + ':</b> ' + botMessage);
            // says the message using the text to speech function written below
            Speech(botMessage);
            //outputs the last few array elements of messages to html
            for (var i = 1; i < 8; i++) {
                if (messages[messages.length - i])
                    document.getElementById('chatlog' + i).innerHTML =
                        messages[messages.length - i];
            }
        }
    }

    //text to Speech
    //https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
    function Speech(say) {
        if ('speechSynthesis' in window && talking) {
            var utterance = new SpeechSynthesisUtterance(say);
            //msg.voice = voices[10]; // Note: some voices don't support altering params
            //msg.voiceURI = 'native';
            //utterance.volume = 1; // 0 to 1
            //utterance.rate = 0.1; // 0.1 to 10
            //utterance.pitch = 1; // 0 to 2
            //utterance.text = 'Hello World';
            //utterance.lang = 'en-US';
            speechSynthesis.speak(utterance);
        }
    }

    //runs the keypress() function when a key is pressed
    document.onkeypress = keyPress;
    //if the key pressed is 'enter' runs the function newEntry()
    function keyPress(e) {
        var x = e || window.event;
        var key = x.keyCode || x.which;
        if (key == 13 || key == 3) {
            //runs this function when enter is pressed
            newEntry();
        }
        if (key == 38) {
            console.log('hi');
            //document.getElementById("chatbox").value = lastUserMessage;
        }
    }

    //clears the placeholder text ion the chatbox
    //this function is set to run when the users brings focus to the chatbox, by clicking on it
    function placeHolder() {
        document.getElementById('chatbox').placeholder = '';
    }
}
