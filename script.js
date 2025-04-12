function updateTimeAndDate() {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const date = now.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
    document.getElementById("time").textContent = time;
    document.getElementById("date").textContent = date;
  }
  
  function rotateQuote() {
    const q = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").textContent = `"${q.text}"`;
    document.getElementById("author").textContent = q.author;
    document.getElementById("category").textContent = q.category;
    document.getElementById("authorImage").src = q.image;
  }
  
  function toggleTheme() {
    document.body.classList.toggle('dark');
  }
  
  document.getElementById("toggleTheme").addEventListener("click", toggleTheme);
  
  rotateQuote();
  updateTimeAndDate();
  setInterval(updateTimeAndDate, 60000); // Update every minute
  
