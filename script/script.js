let timeLeft = 300; // 5 minutes in seconds
let timer;

function startTimer() {
	timer = setInterval(function() {
		let minutes = Math.floor(timeLeft / 60);
		let seconds = timeLeft % 60;

		if (seconds < 10) {
			seconds = '0' + seconds;
		}

		document.getElementById('timer').innerHTML = 'Time remaining: ' + minutes + ':' + seconds;

		if (timeLeft <= 0) {
			clearInterval(timer);
			document.getElementById('timer').innerHTML = 'OTP expired. Please request a new OTP.';
			document.querySelector('input[type="submit"]').disabled = true;
			document.querySelector('.resend-otp').innerHTML = 'OTP expired. <a href="#">Request a new OTP</a>';
		}

		timeLeft -= 1;
	}, 1000);
}

document.getElementById('start-timer-btn').addEventListener('click', startTimer);
