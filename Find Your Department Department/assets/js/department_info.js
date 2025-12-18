// ข้อมูลภาควิชา (Database จำลอง)
const departments = [
    {   id: 1, name: "Civil", th_name: "วิศวกรรมโยธา", 
        icon: "🏗️", color: "#723d24ff", image: "https://placehold.co/800x400/A0522D/FFF?text=Civil", 
        desc: "สร้างเมือง ตึกสูง อุโมงค์ และโครงสร้างพื้นฐาน", 
        jobs: "วิศวกรโครงสร้าง, ผู้รับเหมา" } ,

    {   id: 2, name: "Electrical", th_name: "วิศวกรรมไฟฟ้า", 
        icon: "⚡", color: "#FF8C00", image: "https://placehold.co/800x400/FF8C00/FFF?text=Electrical", 
        desc: "ระบบไฟฟ้ากำลัง พลังงานสะอาด และวงจรไฟฟ้า", 
        jobs: "การไฟฟ้า, โรงงานผลิตไฟฟ้า" } ,

    {   id: 3, name: "Mechanical", th_name: "วิศวกรรมเครื่องกล", 
        icon: "⚙️", color: "#8B0000", image: "https://placehold.co/800x400/8B0000/FFF?text=Mechanical", 
        desc: "เครื่องจักรกล ยานยนต์ ความร้อน และหุ่นยนต์", 
        jobs: "วิศวกรโรงงาน, ออกแบบชิ้นส่วน" } ,
    
    {   id: 4, name: "Automotive", th_name: "วิศวกรรมยานยนต์", 
        icon: "🚗", color: "#DC143C", image: "https://placehold.co/800x400/DC143C/FFF?text=Auto", 
        desc: "เทคโนโลยียานยนต์สมัยใหม่ และรถยนต์ไฟฟ้า (EV)", 
        jobs: "ค่ายรถยนต์, R&D" } ,

    {   id: 5, name: "Industrial", th_name: "วิศวกรรมอุตสาหการ", 
        icon: "🏭", color: "#4682B4", image: "https://placehold.co/800x400/4682B4/FFF?text=IE", 
        desc: "การจัดการระบบ บริหารการผลิต และโลจิสติกส์", 
        jobs: "ผู้จัดการโรงงาน, Supply Chain" },

    {   id: 6, name: "Chemical", th_name: "วิศวกรรมเคมี", 
        icon: "🧪", color: "#2E8B57", image: "https://placehold.co/800x400/2E8B57/FFF?text=Chemical", 
        desc: "กระบวนการผลิตสารเคมี ยา และปิโตรเลียม", 
        jobs: "โรงกลั่นน้ำมัน, โรงงานยา" } ,

    {   id: 7, name: "Computer", th_name: "วิศวกรรมคอมพิวเตอร์", 
        icon: "💻", color: "#4B0082", image: "https://placehold.co/800x400/4B0082/FFF?text=Computer", 
        desc: "Software, AI, Hardware และ Cybersecurity", 
        jobs: "Developer, Data Scientist" },

    {   id: 8, name: "Environmental", th_name: "วิศวกรรมสิ่งแวดล้อม", 
        icon: "🌱", color: "#32CD32", image: "https://placehold.co/800x400/32CD32/FFF?text=Envi", 
        desc: "ดูแลมลพิษ บำบัดน้ำเสีย และสิ่งแวดล้อม", 
        jobs: "กรมควบคุมมลพิษ, ที่ปรึกษา EIA" },

    {   id: 9, name: "Nuclear", th_name: "วิศวกรรมนิวเคลียร์และรังสี", 
        icon: "💻", color: "#4B0082", image: "https://placehold.co/800x400/4B0082/FFF?text=Computer", 
        desc: "Software, AI, Hardware และ Cybersecurity", 
        jobs: "Developer, Data Scientist" },

    {   id: 10, name: "Survey", th_name: "วิศวกรรมสำรวจ", 
        icon: "🔎", color: "#32CD32", image: "https://placehold.co/800x400/32CD32/FFF?text=Envi", 
        desc: "ดูแลมลพิษ บำบัดน้ำเสีย และสิ่งแวดล้อม", 
        jobs: "กรมควบคุมมลพิษ, ที่ปรึกษา EIA" },

    {   id: 11, name: "Metallurgical", th_name: "วิศวกรรมโลหการเเละวัสดุ", 
        icon: "💻", color: "#4B0082", image: "https://placehold.co/800x400/4B0082/FFF?text=Computer", 
        desc: "Software, AI, Hardware และ Cybersecurity", 
        jobs: "Developer, Data Scientist" },

    {   id: 12, name: "Petroleum", th_name: "วิศวกรรมปิโตรเลียม", 
        icon: "🛢️", color: "#32CD32", image: "https://placehold.co/800x400/32CD32/FFF?text=Envi", 
        desc: "ดูแลมลพิษ บำบัดน้ำเสีย และสิ่งแวดล้อม", 
        jobs: "กรมควบคุมมลพิษ, ที่ปรึกษา EIA" },
        
    {   id: 12, name: "Georesources", th_name: "วิศวกรรมทรัพยากรธรณี", 
        icon: "🪨", color: "#32CD32", image: "https://placehold.co/800x400/32CD32/FFF?text=Envi", 
        desc: "ดูแลมลพิษ บำบัดน้ำเสีย และสิ่งแวดล้อม", 
        jobs: "กรมควบคุมมลพิษ, ที่ปรึกษา EIA" }
];

// เลือก Element จาก HTML
const btnContainer = document.getElementById('buttons-container'); 
const displayArea = document.getElementById('display-area');

// ฟังก์ชันเริ่มทำงานเมื่อโหลดหน้าเว็บ
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. สร้างปุ่มเมนูด้านบน
    departments.forEach((dept, index) => {
        const btn = document.createElement('div');
        btn.className = 'dept-btn';
        btn.innerHTML = `<span class="me-1">${dept.icon}</span> ${dept.name}`;
        
        // เมื่อกดปุ่ม
        btn.onclick = () => {
            // ล้าง active เก่า
            document.querySelectorAll('.dept-btn').forEach(b => {
                b.classList.remove('active');
                b.style.backgroundColor = 'rgba(255,255,255,0.8)';
                b.style.borderColor = 'transparent';
            });

            // ใส่ active ใหม่ + เปลี่ยนสีปุ่มเป็นสีประจำภาค
            btn.classList.add('active');
            btn.style.backgroundColor = dept.color;
            btn.style.borderColor = dept.color;

            // เลื่อน Scroll ไปหาปุ่มที่กด (เผื่อมันหลุดจอ)
            btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

            renderContent(dept);
        };

        // กดปุ่มแรกทันที (Auto Click)
        if(index === 0) {
            // รอเล็กน้อยเพื่อให้ HTML render เสร็จก่อน
            setTimeout(() => btn.click(), 100);
        }

        btnContainer.appendChild(btn);
    });
});

// 2. ฟังก์ชันแสดงเนื้อหา (และเปลี่ยน Theme)
function renderContent(data) {
    displayArea.innerHTML = `
        <div class="info-card fade-in" style="--current-theme: ${data.color}">
            <div class="card-header-strip"></div>
            
            <div class="row align-items-center">
                <div class="col-md-5 mb-3 mb-md-0">
                        <img src="${data.image}" class="img-fluid rounded shadow w-100" style="object-fit: cover; max-height: 300px;">
                </div>
                <div class="col-md-7">
                    <h5 class="text-muted mb-1">${data.th_name}</h5>
                    <h2 class="dept-title mb-3">
                        <span class="me-2">${data.icon}</span>${data.name + " ENGINEERING"}
                    </h2>
                    <hr style="color: ${data.color}; opacity: 0.5;">
                    
                    <div class="section-box">
                        <h5 class="fw-bold" style="color: ${data.color}">📖 เรียนเกี่ยวกับ?</h5>
                        <p class="mb-0">${data.desc}</p>
                    </div>

                        <div class="section-box">
                        <h5 class="fw-bold" style="color: ${data.color}">💼 จบไปทำอะไร?</h5>
                        <p class="mb-0">${data.jobs}</p>
                    </div>

                        <div class="text-end mt-4">
                        <button class="btn-action shadow">
                            ดูหลักสูตรเต็มๆ <i class="bi bi-arrow-right-circle ms-1"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}