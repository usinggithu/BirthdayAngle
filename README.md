<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Birthday Invitation</title>
    <style>
        /* CSS STYLES */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(135deg, #6a0dad, #9b59b6, #d8bfd8);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            position: relative; /* Keeps confetti relative to the window boundary */
        }
        .container {
            text-align: center;
            z-index: 2;
        }
        h1 {
            color: white;
            font-size: 55px;
            margin-bottom: 10px;
            animation: bounce 2s infinite;
            text-shadow: 2px 2px 10px rgba(0,0,0,.3);
        }
        h2 {
            color: white;
            margin-bottom: 20px;
        }
        .card {
            width: 420px;
            background: white;
            padding: 30px;
            border-radius: 25px;
            box-shadow: 0 15px 30px rgba(0,0,0,.25);
        }
        .card h3 {
            color: #ff4b6e;
            margin-bottom: 15px;
        }
        .card p {
            margin: 12px 0;
            font-size: 18px;
        }
        .message {
            margin-top: 20px;
            color: #555;
        }
        hr {
            margin: 25px 0;
        }
        input {
            width: 90%;
            padding: 12px;
            border: 2px solid #ff4b6e;
            border-radius: 25px;
            font-size: 16px;
            text-align: center;
            margin-bottom: 15px;
            outline: none;
        }
        input:focus {
            border-color: #ff1744;
        }
        button {
            background: #ff4b6e;
            color: white;
            border: none;
            padding: 14px 30px;
            border-radius: 30px;
            font-size: 17px;
            cursor: pointer;
            transition: .3s;
        }
        button:hover {
            background: #ff1744;
            transform: scale(1.08);
        }
        #response {
            margin-top: 20px;
            color: #ff1744;
            font-weight: bold;
            font-size: 18px;
        }
        .confetti {
            position: absolute;
            width: 12px;
            height: 12px;
            top: -20px;
            animation: fall linear forwards;
            z-index: 1; /* Keeps confetti falling behind the content card */
        }
        @keyframes bounce {
            0% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
            100% { transform: translateY(0); }
        }
        @keyframes fall {
            from {
                transform: translateY(-20px) rotate(0deg);
            }
            to {
                transform: translateY(110vh) rotate(720deg);
            }
        }
    </style>
</head>
<body>

<div class="container">
    <h1>🎉 You're Invited! 🎉</h1>
    <h2>Come Celebrate Madison's Birthday!</h2>
    <div class="card">
        <h3>🎂 Madison's 14th Birthday</h3>
        <p><strong>📅 Date:</strong> Saturday, August 8</p>
        <p><strong>⏰ Time:</strong> 3:00 - 6:00 PM</p>
        <p><strong>📍 Location:</strong> Madisons House</p>
        <p class="message"> Please message Maddie for House Address </p>
        <hr>
        <h3>RSVP</h3>
        <input type="text" id="guestName" placeholder="Enter your name">
        <button onclick="rsvp()"> RSVP </button>
        <p id="response"></p>
    </div>
</div>


<script>
   
    const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyVawKQFUBOv7WY-kNDViuXkSvdYCKwykiiz17_5S36KyTHuc0OUF3jEU8jfZ6n5Vj_aA/exec";
    // ==========================================

    function rsvp() {
        const input = document.getElementById("guestName");
        const response = document.getElementById("response");
        const name = input.value.trim();

        if (name === "") {
            alert("Please enter your name!");
            return;
        }

        response.innerHTML = response.innerHTML = "🎉 Thanks for RSVPing, <strong>" + name + "</strong>!";;
        createConfetti();

    

        if (WEB_APP_URL !== "") {
            fetch(WEB_APP_URL, {
                method: "POST",
                mode: "no-cors", // Crucial for typical Google Apps Script POST requests
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name: name, time: new Date().toLocaleString() })
            })
            .catch(error => console.log(error));
        }

        input.value = "";
    }

    const colors = [
        "#ff1744",
        "#ff9100",
        "#ffd600",
        "#00e5ff",
        "#00c853",
        "#d500f9"
    ];

    function createConfetti() {
        for(let i = 0; i < 120; i++){
            const piece = document.createElement("div");
            piece.className = "confetti";
            piece.style.left = Math.random() * window.innerWidth + "px";
            piece.style.background = colors[Math.floor(Math.random() * colors.length)];
            piece.style.animationDuration = (Math.random() * 3 + 2) + "s";
            piece.style.opacity = Math.random();
            document.body.appendChild(piece);
            
            setTimeout(() => {
                piece.remove();
            }, 5000);
        }
    }
</script>

</body>
</html> 