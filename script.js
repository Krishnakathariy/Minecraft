// Simulated server status check
document.addEventListener('DOMContentLoaded', function () {
    const serverStatusElement = document.getElementById('server-status');

    // Simulate server status checking
    setTimeout(() => {
        // Randomly set server status to "Online" or "Offline"
        const isOnline = Math.random() > 0.2; // 80% chance of being online
        serverStatusElement.textContent = isOnline ? 'Online' : 'Offline';
        serverStatusElement.style.color = isOnline ? 'green' : 'red';
    }, 2000);
});