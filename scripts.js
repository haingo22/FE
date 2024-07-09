// Đăng nhập
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    
    if (username === "" || password === "") {
        alert("Vui lòng nhập tên đăng nhập và mật khẩu.");
        return;
    }
    
    console.log('Đăng nhập:', username, password);
    // Thêm mã đăng nhập vào đây
});

// Đăng ký
document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    
    if (username === "" || email === "" || password === "") {
        alert("Vui lòng nhập đầy đủ thông tin đăng ký.");
        return;
    }
    
    console.log('Đăng ký:', username, email, password);
    // Thêm mã đăng ký vào đây
});




document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const cardName = document.getElementById('cardName').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    
    if (!cardName || !cardNumber || !expiryDate || !cvv) {
        alert("Vui lòng nhập đầy đủ thông tin.");
        return;
    }
    
    console.log('Thanh toán:', cardName, cardNumber, expiryDate, cvv);
    
    // Thêm mã xử lý thanh toán vào đây
    // Ví dụ: Gửi yêu cầu thanh toán đến server
    // fetch('/payment', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ cardName, cardNumber, expiryDate, cvv })
    // })
    // .then(response => response.json())
    // .then(data => {
    //     if (data.success) {
    //         alert("Thanh toán thành công!");
    //         // Chuyển hướng đến trang xác nhận thanh toán
    //         window.location.href = '/payment-confirmation';
    //     } else {
    //         alert("Thanh toán thất bại. Vui lòng thử lại.");
    //     }
    // })
    // .catch(error => console.error('Error:', error));
});

document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const ticketId = document.getElementById('ticketId').value;
    
    if (!ticketId) {
        alert("Vui lòng nhập mã vé.");
        return;
    }
    
    console.log('Tìm kiếm mã vé:', ticketId);

    
});


// Mock data (Thay thế bằng dữ liệu thật từ cơ sở dữ liệu hoặc API)
const mockData = [
    { id: '123', name: 'Nguyễn Văn A', phone: '0901234567', email: 'nguyenvana@example.com', date: '01/01/2024', amount: '500,000 VND' },
    { id: '456', name: 'Trần Thị B', phone: '0902345678', email: 'tranthib@example.com', date: '02/01/2024', amount: '600,000 VND' },
    { id: '789', name: 'Lê Văn C', phone: '0903456789', email: 'levanc@example.com', date: '03/01/2024', amount: '700,000 VND' }
];

// Function to display ticket details
function displayTicketDetails() {
    const ticketDetailsContainer = document.getElementById('ticketDetails');
    ticketDetailsContainer.innerHTML = ''; // Clear previous content

    mockData.forEach(ticket => {
        const ticketElement = document.createElement('div');
        ticketElement.classList.add('ticket-item');

        ticketElement.innerHTML = `
            <div class="ticket-item-content">
                <p><strong>Người Mua:</strong> ${ticket.name}</p>
                <p><strong>Số Điện Thoại:</strong> ${ticket.phone}</p>
                <p><strong>Email:</strong> ${ticket.email}</p>
                <p><strong>Ngày Giờ Mua:</strong> ${ticket.date}</p>
                <p><strong>Số Tiền Mua:</strong> ${ticket.amount}</p>
            </div>
        `;

        ticketDetailsContainer.appendChild(ticketElement);
    });
}

// Call the function to display ticket details when the page loads
window.onload = function() {
    displayTicketDetails();
};




