// toast.js
function showToast(message, isSuccess) {
    const toastContainer = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = isSuccess ? "toast success" : "toast error";
    toast.textContent = message;
    toastContainer.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000); // Remove the toast after 3 seconds
}
