const departments = [

    // ---------- Civil Engineering -----------
    {   // Part I : Basic Info 
        dept_id : 21010 , 
        name: "Civil", 
        th_name: "วิศวกรรมโยธา", 
        icon: "🏗️", 
        color: "#A0522D", 
        dept_web : "https://civil.eng.chula.ac.th/web/" , 
        image: "./assets/img/civil_eng_21010/civil_eng.png", 

        // Part II : Personality & Caption for department 
        desc : "3 ภาควิชายุคเริ่มเเรกตัวที่ 1 เน้นเรื่องโครงสร้างพื้นฐานที่จำเป็นต่อมนุษย์",
        personality : "สนใจเกี่ยวกับ โครงสร้าง ชอบลงมือทำงานจริง รวมถึงการชอบมองระบบใหญ่ๆ มองภาพรวม" , 
        checklist : "ลองสร้างโมเดลรองรับโครงสร้างรองรับน้ำหนักเบื้องต้น , ศึกษาระบบการขนส่งในกรุงเทพฯเบื้องต้น , ลองศึกษาองค์ประกอบของคอนกรีต" ,

        // Part III : Tracks 
        tracks: [
            { title: "🏗️ Structural (โครงสร้าง)", detail: "วิเคราะห์และออกแบบโครงสร้างเพื่อรองรับน้ำหนักได้อย่างปลอดภัย" },
            { title: "🪨 Geotechnical (ธรณี)", detail: "ศึกษาพฤติกรรมของดินที่ใช้รองรับโครงสร้าง เพื่อออกแบบโครงสร้างในดินให้ปลอดภัย" },
            { title: "🧳 Construction Management (บริหารงานก่อสร้าง)", detail: "จัดการน้ำท่วม เขื่อน ระบบชลประทาน" },
            { title: "🛤️ Transportation (ขนส่ง)", detail: "วิเคราะห์เเละออกเเบบพื้นฐานระบบการขนส่ง" }
        ] , 

        // Part IV : Career Path & Jobs
        career_path : [
            {   title : "Site Engineer (ตรงสาย)" , 
                desc : "หลักๆสายงานนี้จะเป็นการลง Site งานจริง โดยดูเเลการก่อสร้างโดยรวม เเก้ไขปัญหาในงาน เเละส่งมอบให้ลูกค้า ซึ่งได้ใช้ความรู้ในสายโครงสร้างเเละบริหารงานก่อสร้างค่อนข้างมาก อีกทั้งสามารถต่อยอดขึ้นไปในสาย Management ได้อีกด้วย"  ,
                link : "https://th.jobsdb.com/th/site-engineer-jobs?jobId=89280144&type=standard" } , 

            {   title : "Project Manager (ตรงสาย & เบนสาย)" , 
                desc : "สายงานนี้ค่อนข้างเป็นที่นิยม เนื่องจากมีการประยุกต์ใช้ความรู้เกี่ยวกับระบบโครงสร้าง ในการนำมาลงมือบริหาร Project ต่างๆ โดยอาจจะมีทั้ง Project ตรงสาย (Infrastructure) กับ งานเบนสาย (Real Estate)" , 
                link : "https://th.jobsdb.com/th/Project-Manager-jobs?jobId=89250487&type=standard" } , 

            {   title : "Data Scientist (เบนสาย)" , 
                desc : "สายงานนี้ค่อนข้างเป็นที่นิยมเช่นเดียวกัน เนื่องจากเป็นการจัดการข้อมูล รวมถึงคิดค้น Model ที่ทำให้ข้อมูลที่เราต้องการได้ประสิทธิภาพสูงสุด ซึ่งต่อยอดมาจากวิศวกรรมขนส่งอีกด้วย" ,
                link : "https://scbtechx.io/th/blogs/careers/job-skills-data-science/" } 
        ] , 

        // Part V : Activities & Facilities in department 
        activities_facilities_in_dept : [
            {   title : "กิจกรรม CE Connect" , image_source : "./assets/img/civil_eng_21010/ce_connect.jpg" , link : "https://www.facebook.com/share/p/1BfS5h5xj8/" , 
                desc : "กิจกรรมรวมพี่ๆ ศิษย์เก่ามาเล่าประสบการณ์ในชีวิตจริง" } ,
            {   title : "กิจกรรมสำรวจรอยร้าวจากเหตุการณ์เเผ่นดินไหว 2025" , image_source : "./assets/img/civil_eng_21010/earthquake_onsite.jpg" , link : "https://www.facebook.com/share/p/1AFCtc5fyw/" , 
                desc : "กิจกรรมที่ลองสำรวจ เช็คมาตรฐาน เเละประเมินความเสียหาย เพื่อเช็คว่าอาคารสามารถใช้งานได้ต่อหรือไม่ โดยนำความรู้วิศวกรรมโยธามาประยุกต์ใช้" } ,
            {   title : "ค่ายสำรวจ สำรวจพื้นที่ ร่วมกับภาควิชาวิศวกรรมสำรวจ" , image_source : "./assets/img/civil_eng_21010/survey_camp.jpg" , link : "https://www.facebook.com/share/p/1BS5Ex2r17/" , 
                desc : "ค่ายทบทวนพื้นฐานการสำรวจพื้นที่ ซึ่งเป็นพื้นฐานที่วิศวกรรมโยธาควรต้องรู้" } ,
                
        ] , 

        // Part VI : Additional Info 
        additional_info : [
            {   title : "คลิปอธิบายหลักสูตรวิศวกรรมโยธา จากอาจารย์ในภาค" , link : "https://www.dropbox.com/scl/fi/ah0babb9ro2pv0apzcexe/_.mp4?rlkey=a4muynnfyjy6umlllpps5y759&st=f06hakvg&dl=0" } , 
            {   title : "IG รีวิวชีวิต การเรียน กิจกรรมในวิศวกรรมโยธา" , link : "https://www.instagram.com/2101.ce.meme/" } 
        ]
    },

    // ---------- Electrical Engineering -----------

    { 
        // Part I : Basic Info 
        dept_id: 21020 , 
        name: "Electrical", 
        th_name: "วิศวกรรมไฟฟ้า", 
        icon: "⚡", 
        color: "#ffd001ff", // สีส้ม
        dept_web : "https://ee.eng.chula.ac.th/" , 
        image: "./assets/img/electrical_eng_21020/electrical_eng.png", 
        
        // Part II : Personality & Caption for department 
        desc : "3 ภาควิชายุคเริ่มเเรกตัวที่ 2 พื้นฐานการมีอยู่ของเทคโนโลยีเกิดจากไฟฟ้าทั้งสิ้น",
        personality : "สนใจเกี่ยวกับคณิตศาสตร์ ชอบค้นหาต้นกำเนิดของอุปกรณ์อิเล็กทรอนิกส์ สนใจระบบไฟฟ้าโดยรวม" , 
        checklist : "ลองศึกษา Microcontroller เบื้องต้น , ลงมือทำ Mini Project เกี่ยวกับด้าน Network , ศึกษาวงจร Op-Amp จากวิทยุสื่อสาร" ,

        // Part III : Tracks 
        tracks: [
            { title: "⚡️ Power (ไฟฟ้ากำลัง)", detail: "ศึกษา/ออกเเบบระบบการเดินไฟในอาคารต่างๆ ออกเเบบระบบไฟฟ้าในสิ่งต่างๆ เช่น รถยนต์ EV" },
            { title: "🕹️ Control (ไฟฟ้าควบคุม)", detail: "ศึกษา/ออกเเบบระบบการควบคุมต่างๆ เช่น การควบคุมระบบ Smart Home" },
            { title: "📡 Communication (ไฟฟ้าสื่อสาร)", detail: "ศึกษา/ออกเเบบการส่งข้อมูลโทรคมนาคม เช่น Fiber Optic" },
            { title: "🤖 Electronics (ไฟฟ้าอิเล็กทรอนิกส์)", detail: "ศึกษา/ออกเเบบอุปกรณ์อิเล็กทรอนิกส์ เช่น IC Design , Semiconductor" }
        ] , 

        // Part IV : Career Path & Jobs
        career_path : [
            {   title : "Project Engineer (Renewable Energy) (กึ่งตรงสาย)" , 
                desc : "ในส่วนงานนี้จะทำเกี่ยวกับการบริหาร วงเเผน ควบคุม ตรวจสอบ เกี่ยวกับโครงการด้านพลังงานหมุนเวียน ซึ่งน่าสนใจเนื่องจากได้ Adapt ความรู้วิศวกรรมไฟฟ้ามาใช้งานจริง"  ,
                link : "https://th.jobsdb.com/th/job/88754110?type=standard&origin=showNewTab#sol=d0bbee42d2e405af52655f78fa35a48c9a9b45b9" } , 

            {   title : "Electrical Engineer (Power) (ตรงสาย)" , 
                desc : "งานนี้ค่อนข้างตรงสายมากๆ โดยเฉพาะไฟฟ้ากำลัง เนื่องจากเป็นงานเกี่ยวกับการออกเเบบระบบไฟฟ้าต่างๆ เช่น PV system Design รวมถึงต้องรู้ Single Line Diagrams อีกด้วย" , 
                link : "https://th.jobsdb.com/th/job/88867963?type=standard&origin=showNewTab#sol=a0387f3880e5ceb768180889958ff5bf98b878aa" } , 

            {   title : "Network Engineer Infrastructure (กึ่งตรงสาย)" , 
                desc : "สายงานนี้ได้ใช้ความรู้วิศวกรรมไฟฟ้าสื่อสารค่อนข้างมาก คือ ออกเเบบ Infrastrcture โดยใช้พื้นฐานความรู้ เช่น ระบบ Firewall , VPN , LAN/MAN/WLAN รวมถึงทักษะอื่นๆที่จำเป็นด้วย" ,
                link : "https://th.jobsdb.com/th/job/89200958?type=standard&origin=showNewTab#sol=bce8d322f55b7d1d03a0028397ee8cdba5eba8f1" } ,

            {   title : "Software Embedded Engineer (กึ่งตรงสาย)" , 
                desc : "งานนี้จะเกี่ยวกับการพัฒนาโปรเเกรทบนบอร์ด FPGA ซึ่งจะต้อวมีพื้นฐาน Programming ในระดับหนึ่ง เช่น ภาษา Verilog , C++ , C ซึ่งเป็นการต่อยอดความรู้สายไฟฟ้าอิเล็กทรอนิกส์เพิ่มเติม" ,
                link : "https://th.jobsdb.com/th/job/89016780?type=standard&origin=showNewTab#sol=93c83e51d3b87fec2d28a930a9e175ae97f33204" } ,

            {   title : "Risk Analyst (เบนสาย)" , 
                desc : "งานนี้จะเกี่ยวกับการวิเคราะห์ความเสี่ยงทางการเงิน รวมถึงพัฒนาโมเดลพฤติกรรมการใช้เงิน ซึ่งต้องใช้พื้นฐานคณิตศาสตร์ค่อนข้างมาก นับเป็นการต่อยอดจากวิสวกรรมไฟฟ้าที่ดีมาก" ,
                link : "https://th.jobsdb.com/th/job/88877038?type=standard&origin=showNewTab#sol=eb0341871ab8a06f7adaa20ce7ee713c1ef9b244" } 
        ] , 

        // Part V : Activities & Facilities in department 
        activities_facilities_in_dept : [
            {   title : "ค่าย CUEE Camp III" , image_source : "./assets/img/electrical_eng_21020/cuee_camp.jpg" , link : "https://www.facebook.com/photo?fbid=122147441384123594&set=pcb.122147441474123594" , 
                desc : "กิจกรรมรวมพี่ๆ ศิษย์เก่ามาเล่าประสบการณ์ในชีวิตจริง" } ,
            {   title : "ค่าย DDCamp By บริษัท Digital Design" , image_source : "./assets/img/electrical_eng_21020/ddcamp_cuee.jpg" , link : "https://www.facebook.com/share/p/1GgeQmVy3C/" , 
                desc : "กิจกรรมที่ลองสำรวจ เช็คมาตรฐาน เเละประเมินความเสียหาย เพื่อเช็คว่าอาคารสามารถใช้งานได้" } ,
        ] , 

        // Part VI : Additional Info 
        additional_info : [
            {   title : "คลิปพี่เเชร์น้อง วิศวกรรมไฟฟ้่า For CUEE107" , link : "https://drive.google.com/file/d/12UDegVPpLnkjjFM3_nZw5KBhEa33I3wq/view?usp=sharing" } , 
            {   title : "อธิบายหลักสูตร CUEE By P'Non 103" , link : "https://youtu.be/UzEZIsZuxsU?si=euobJ1zexfLLgRqV" } ,
            {   title : "รีวิว CUEE By รุ่นพี่ CUEE107" , link : "https://ee-semi.my.canva.site/#ee" } ,
            {   title : "พูดจาประสาช่าง วิศวะไฟฟ้า จุฬาฯ" , link : "https://www.youtube.com/watch?v=sg3euPc8t7M" } 
        ]
    },


    // ---------- Mechanical Engineering -----------
    { 
        // Part I : Basic Info
        dept_id: 21030 , 
        name: "Mechanical", 
        th_name: "วิศวกรรมเครื่องกล", 
        icon: "⚙️", 
        color: "#b80202ff", // สีแดงเข้ม
        dept_web : "https://me.eng.chula.ac.th/academics-and-admissions/undergraduate-program/mech-eng/" , 
        image: "./assets/img/mechanical_eng_21030/mechanical_eng.png", 

        // Part II : Personality & Caption for department 
        desc : "3 ภาควิชายุคเริ่มเเรกตัวที่ 3 กลไกฟันเฟืองสำคัญที่ขับเคลื่อนโลกไปข้างหน้า",
        personality : "สนใจเกี่ยวกับ ระบบกลไกต่างๆ การสร้างอุปกรณ์เชิงกล รวมถึงการเเก้ปัญหาทางวิศวกรรม" , 
        checklist : "ลองศึกษาระบบกลไกของหุ่นยนต์เเบบเบื้องต้น , ทบทวนเนื้อหา Gen Phys I ให้เเม่นๆ , ฝึกทำ CAD ในหลายๆชิ้นงาน" ,

        // Part III : Tracks 
        tracks: [
            { title: "📦 กลุ่มวิชา Solids", detail: "กลุ่มวิชาที่ศึกษาเกี่ยวกับการรับเเรงของวัสดุ" },
            { title: "🤖 กลุ่มวิชา Dynamics - Control", detail: "กลุ่มวิชาที่ศึกษาการควบคุมที่มีการเปลี่ยนเเปลงตามเวลา เช่น หุ่นยนต์ , ระบบ Mechatronics" },
            { title: "💧 กลุ่มวิชา Fluid", detail: "กลุ่มวิชาที่ศึกษาเกี่ยวกับระบบของการไหลของวัตถุ เช่น การไหลของน้ำในท่อ การไหลของอากาศที่ปีกเครื่องบิน" },
            { title: "🥵 กลุ่มวิชา Thermal - Energy", detail: "กลุ่มวิชาที่ศึกษาเกี่ยวกับการถ่ายเทพลังงานความร้อน เเละการเปลี่ยนเเปลงของพลังงาน" } ,
            { title: "⚛️ กลุ่มวิชา Modern Mechanics & Manufacturing", detail: "กลุ่มวิชาที่จะนำความรู้หลาย ๆ สายมารวมกันเพื่อสร้างนวัตกรรม เช่น Micro-Electromechanical Systems และ Nanotechnology " }
        ] , 

        // Part IV : Career Path & Jobs
        career_path : [
            {   title : "Mechatronics / Robotics Engineer (กึ่งตรงสาย)" , 
                desc : "สายงานนี้เน้นไปที่การพัฒนาระบบของหุ่นยนต์และแมคคาทรอนิกส์ โดยควรจะต้องรู้พื้นฐาน PLC และ SCADA เบื้องต้น ซึ่งประยุกต์ Logic จากการมองเป็นระบบกลไก"  ,
                link : "https://th.jobsdb.com/th/job/88901244?type=standard&origin=showNewTab#sol=1a980ba3fc525da79e4e0db0eef0f496f29a582a" } , 

            {   title : "Automation Engineer (ตรงสาย)" , 
                desc : "สายงานนี้เน้นไปที่การเเก้ปัญหา Automation Machine เป็นที่น่าสนใจเนื่องจากมีการประยุกต์หลายๆศาสตร์เข้าด้วยกัน เช่น Machine Learning , Mechanical Design , Mechatronics"  ,
                link : "https://th.jobsdb.com/th/job/89082121?type=standard&origin=showNewTab#sol=6662aff3acce4a4e3da303356a92676ac3837a08" } , 

            {   title : "Maintenance Engineer (ตรงสาย)" , 
                desc : "งานนี้เน้นไปที่การซ่อมบำรุงเครื่องจักร รวมถึงเเก้ปัญหากับช่างเทคนิค ซึ่งมีการทำงานร่วมกับฝ่ายอื่นๆด้วย โดยนำความรู้ที่เรียนมาเเก้ปัญหาเครื่องจักร"  ,
                link : "https://th.jobsdb.com/th/job/89227373?type=standard&origin=showNewTab#sol=bc39a9ff0e4b02aae961db2e341b824fa2bac1fb" } , 

            {   title : "Data Engineer (เบนสาย)" , 
                desc : "เป็นสายงานที่ค่อนข้างฮิต โดยเป้นการออกเเบบ Pipeline สำหรับการเก็บข้อมูล จากอุปกรณ์ต่างๆ เช่น PLC , SCADA , ERP และนำข้อมูลไปวิเคราะห์ต่อ"  ,
                link : "https://th.jobsdb.com/th/job/89152343?type=standard&origin=showNewTab#sol=116c4b613aaf9ed7898e9f6930e2463c4c9047d8" } , 
        ] , 

        // Part V : Activities & Facilities in department 
        activities_facilities_in_dept : [
            {   title : "MI Workspace ตึก 100 ปี" , image_source : "./assets/img/mechanical_eng_21030/mi_workspace.jpg" , 
                desc : "ห้อง MI สำหรับนิสิตที่สนใจในการลองทำ Workshop ต่ายๆ เช่น 3D Printing , Laser Cut" } ,
            {   title : "ชมรม EIC Chula" , image_source : "./assets/img/mechanical_eng_21030/eic_chula.jpg" , 
                desc : "ชมรมสำหรับนักประดิษฐ์ที่สนใจในการประดิษฐ์ คิดคนนวัตกรรมต่างๆ เช่น หุ่นยนต์" } 
        ] , 

        // Part VI : Additional Info 
        additional_info : [
            {   title : "คลิปเเนะนำหลักสูตร ME by ME104" , link : "https://youtu.be/fO1z2X_WyXo?si=MtFGd24PNQk_wAL0" } , 
            {   title : "พูดจาประสาช่าง วิศวกรรมเครื่องกล จุฬาฯ" , link : "https://youtu.be/3EYDv1O-9GM?si=MK8rSI_e1Tkb8e6a" } 
        ]
    } , 
    
    // ---------- Automotive Engineering -----------
    { 
        dept_id: 21031 , 
        name: "Automotive", 
        th_name: "วิศวกรรมยานยนต์", 
        icon: "🏎️", 
        color: "#700101ff", // สีแดงเข้ม
        dept_web : "https://me.eng.chula.ac.th/academics-and-admissions/undergraduate-program/auto-eng/" , 
        image: "./assets/img/automotive_eng_21031/automotive_eng.png", 

        // Part II : Personality & Caption for department 
        desc : "จากเครื่องกลสู่ยานยนต์ เมื่ออุตสาหกรรมยานยนต์เป็นที่นิยมมากขึ้น",
        personality : "ชื่นชอบในระบบกลไกทางยานยนต์ สนใจในการพัฒนาโครงสร้างรถยนต์ และชื่นชอบในตัวยานพาหนะต่างๆ" , 
        checklist : "ลองศึกษาระบบกลไกของเครื่องยนต์เเบบเบื้องต้น , ทบทวนเนื้อหา Gen Phys I ให้เเม่นๆ , ฝึกทำ CAD ในหลายๆชิ้นงาน" ,

        // Part III : Tracks 
        tracks: [
            { title: "📦 กลุ่มวิชา Solids", detail: "กลุ่มวิชาที่ศึกษาเกี่ยวกับการรับเเรงของวัสดุ" },
            { title: "🤖 กลุ่มวิชา Dynamics - Control", detail: "กลุ่มวิชาที่ศึกษาการควบคุมที่มีการเปลี่ยนเเปลงตามเวลา เช่น หุ่นยนต์ , ระบบ Mechatronics" },
            { title: "💧 กลุ่มวิชา Fluid", detail: "กลุ่มวิชาที่ศึกษาเกี่ยวกับระบบของการไหลของวัตถุ เช่น การไหลของน้ำในท่อ การไหลของอากาศที่ปีกเครื่องบิน" },
            { title: "🥵 กลุ่มวิชา Thermal - Energy", detail: "กลุ่มวิชาที่ศึกษาเกี่ยวกับการถ่ายเทพลังงานความร้อน เเละการเปลี่ยนเเปลงของพลังงาน" } ,
            { title: "🏎️ กลุ่มวิชา Automotive", detail: "กลุ่มวิชานี้จะต่างกับของภาคเครื่องกลตรงที่จะเรียนเนื้อหาเกี่ยวกับการออกเเบบชิ้นส่วนทางด้านยานยนต์โดยเฉพาะ รวมถึงด้าน EV & Autonomous Vehicle ด้วย" }
        ] , 

        // Part IV : Career Path & Jobs
        career_path : [
            {   title : "R&D Engineer (Automotive) (ตรงสาย)" , 
                desc : "สายงานนี้เน้นไปที่การออกเเบบชิ้นส่วนทางยานยนต์ เช่น ชิ้นส่วนมอเตอร์ไซค์ รวมถึงออกเเบบทางไฟฟ้าด้วย ซึ่งควรมีพื้นฐานด้าน 3D , CAD ค่อนข้างมาก"  ,
                link : "https://th.jobsdb.com/job/88025068?ref=search-standalone&type=standard&origin=showNewTab#sol=4d51fe33c600f87007e42ae1bcc03c6bbceac288" } , 

            {   title : "Part Specialist (Automotive) (กึ่งตรงสาย)" , 
                desc : "สายงานนี้ค่อนข้างใช้ความรู้ด้านบริหารมาประกอบเยอะ เนื่องจากจัดการเรื่อง Stock สินค้า , ดูเเลราคาต้นทุน , จัดเเคมเปญ ซึ่งนำความรู้ด้านวิศวกรรมยานยนต์มาประยุกต์ใช้มากพอสมควร"  ,
                link : "https://th.jobsdb.com/th/job/89082121?type=standard&origin=showNewTab#sol=6662aff3acce4a4e3da303356a92676ac3837a08" } , 

            {   title : "Maintenance Engineer (ตรงสาย)" , 
                desc : "งานนี้เน้นไปที่การซ่อมบำรุงเครื่องจักร รวมถึงเเก้ปัญหากับช่างเทคนิค ซึ่งมีการทำงานร่วมกับฝ่ายอื่นๆด้วย โดยนำความรู้ที่เรียนมาเเก้ปัญหาเครื่องจักร"  ,
                link : "https://th.jobsdb.com/th/job/89227373?type=standard&origin=showNewTab#sol=bc39a9ff0e4b02aae961db2e341b824fa2bac1fb" } 

        ] , 

        // Part V : Activities & Facilities in department 
        activities_facilities_in_dept : [
            {   title : "MI Workspace ตึก 100 ปี" , image_source : "./assets/img/mechanical_eng_21030/mi_workspace.jpg" , 
                desc : "ห้อง MI สำหรับนิสิตที่สนใจในการลองทำ Workshop ต่ายๆ เช่น 3D Printing , Laser Cut" } ,
            {   title : "ชมรม Rapidamante" , image_source : "./assets/img/automotive_eng_21031/cu_rapidamante.jpeg" , 
                desc : "ชมรมสำหรับคนที่สนใจในการพัฒนารถเเข่งต่างๆ" } 
        ] , 

        // Part VI : Additional Info 
        additional_info : [
            {   title : "เล่าประสบการณ์ R&D Engineer ใต้โต้ะทำงาน" , link : "https://www.youtube.com/watch?v=ThAyx-PgyiY&list=PLiZF1r8zpy_Li49zZOdIYxppN2zXCenWc&index=13" } , 
            {   title : "พาทัวร์โรงงาน BMW By เสือร้องไห้" , link : "https://www.youtube.com/watch?v=eiwNXZ3wvIs" } ,
            {   title : "พาทัวร์โรงงาน Ford By เสือร้องไห้" , link : "https://youtu.be/agZ2DLVk2R0?si=cGyJcU6sBtKp5ujW" } ,
        ]
    } , 

    { 
        dept_id: 21040 , 
        name: "Industrial", 
        th_name: "วิศวกรรมอุตสาหการ", 
        icon: "🏭", 
        color: "#c7a07a",
        dept_web : "https://ienext.eng.chula.ac.th/?page_id=589&lang=en" , 
        image: "./assets/img/industrial_eng_21040/industrial_eng.png", 
        
        // Part II : Personality & Caption for department 
        desc : "ยังไม่เสร็จ",
        personality : "สนใจเกี่ยวกับ ระบบกลไกต่างๆ การสร้างอุปกรณ์เชิงกล รวมถึงการเเก้ปัญหาทางวิศวกรรม" , 
        checklist : "ลองศึกษาระบบกลไกของหุ่นยนต์เเบบเบื้องต้น , ทบทวนเนื้อหา Gen Phys I ให้เเม่นๆ , ฝึกทำ CAD ในหลายๆชิ้นงาน" ,

        // Part III : Tracks 
        tracks: [
            { title: "", detail: "" },
            { title: "", detail: "" },
            { title: "", detail: "" },
            { title: "", detail: "" } ,
            { title: "", detail: "" }
        ] , 

        // Part IV : Career Path & Jobs
        career_path : [
            {   title : "" , 
                desc : ""  ,
                link : "" } , 

            {   title : "Automation Engineer (ตรงสาย)" , 
                desc : "สายงานนี้เน้นไปที่การเเก้ปัญหา Automation Machine เป็นที่น่าสนใจเนื่องจากมีการประยุกต์หลายๆศาสตร์เข้าด้วยกัน เช่น Machine Learning , Mechanical Design , Mechatronics"  ,
                link : "https://th.jobsdb.com/th/job/89082121?type=standard&origin=showNewTab#sol=6662aff3acce4a4e3da303356a92676ac3837a08" } , 

            {   title : "Maintenance Engineer (ตรงสาย)" , 
                desc : "งานนี้เน้นไปที่การซ่อมบำรุงเครื่องจักร รวมถึงเเก้ปัญหากับช่างเทคนิค ซึ่งมีการทำงานร่วมกับฝ่ายอื่นๆด้วย โดยนำความรู้ที่เรียนมาเเก้ปัญหาเครื่องจักร"  ,
                link : "https://th.jobsdb.com/th/job/89227373?type=standard&origin=showNewTab#sol=bc39a9ff0e4b02aae961db2e341b824fa2bac1fb" } , 

            {   title : "Data Engineer (เบนสาย)" , 
                desc : "เป็นสายงานที่ค่อนข้างฮิต โดยเป้นการออกเเบบ Pipeline สำหรับการเก็บข้อมูล จากอุปกรณ์ต่างๆ เช่น PLC , SCADA , ERP และนำข้อมูลไปวิเคราะห์ต่อ"  ,
                link : "https://th.jobsdb.com/th/job/89152343?type=standard&origin=showNewTab#sol=116c4b613aaf9ed7898e9f6930e2463c4c9047d8" } , 
        ] , 

        // Part V : Activities & Facilities in department 
        activities_facilities_in_dept : [
            {   title : "MI Workspace ตึก 100 ปี" , image_source : "./assets/img/mechanical_eng_21030/mi_workspace.jpg" , 
                desc : "ห้อง MI สำหรับนิสิตที่สนใจในการลองทำ Workshop ต่ายๆ เช่น 3D Printing , Laser Cut" } ,
            {   title : "ชมรม EIC Chula" , image_source : "./assets/img/mechanical_eng_21030/eic_chula.jpg" , 
                desc : "ชมรมสำหรับนักประดิษฐ์ที่สนใจในการประดิษฐ์ คิดคนนวัตกรรมต่างๆ เช่น หุ่นยนต์" } 
        ] , 

        // Part VI : Additional Info 
        additional_info : [
            {   title : "คลิปเเนะนำหลักสูตร ME by ME104" , link : "https://youtu.be/fO1z2X_WyXo?si=MtFGd24PNQk_wAL0" } , 
            {   title : "พูดจาประสาช่าง วิศวกรรมเครื่องกล จุฬาฯ" , link : "https://youtu.be/3EYDv1O-9GM?si=MK8rSI_e1Tkb8e6a" } 
        ]
    } , 

    { 
        dept_id: 21050 , 
        name: "Chemical", 
        th_name: "วิศวกรรมเคมี", 
        icon: "🧪", 
        color: "#1469a3ff", 
        dept_web : "https://chem.eng.chula.ac.th/regular-thai-program/" , 
        image: "./assets/img/chemical_eng_21050/chemical_eng.png", 
            
        // Part II : Personality & Caption for department 
        desc : "จากกระบวนการทางเคมี สู่อุตสาหกรรมเคมี ที่นำพาให้มนุษย์มีคุณภาพชีวิตที่ดีขึ้น",
        personality : "สนใจเกี่ยวกับกระบวนการทางเคมีต่างๆ เช่น ออกเเบบ ควบคุม พัฒนากระบวนการ (Process) และพื้นฐานการผลิต" , 
        checklist : "ลองศึกษาระบบ Process ในโรงงานเคมีเบื้องต้น , ศึกษาเกี่ยวกับเคมีพื้นฐานให้เเม่นยำ" ,

        // Part III : Tracks 
        // No Tracks

        // Part IV : Career Path & Jobs
        career_path : [
            {   title : "Process Engineer (ตรงสาย)" , 
                desc : "ถือว่าสายงานนี้ค่อนข้างตรงสายมากๆ หน้าที่หลักๆ คือ ออกเเบบกระบวนการผลิต ควบคุมการทำงาน และปรับปรุงคุณภาพของเสีย ซึ่งล้วนประยุกต์ความรู้จากภาคเคมีค่อนข้างมาก"  ,
                link : "https://th.jobsdb.com/job/88892182?ref=search-standalone&type=standard&origin=showNewTab#sol=780f2c1ea0450c5b24b8fd06c8cd373b22778e60" } , 

            {   title : "Quality Control Engineer (กึ่งตรงสาย)" , 
                desc : "งานสายนี้ค่อนข้างคล้ายกับ Process Engineer โดยทำเกี่ยวกับ การควบคุมคุณภาพสินค้า จัดสรรกำลังคน เเละตรวจสอบคุณภาพสินค้า"  ,
                link : "https://th.jobsdb.com/job/89240007?ref=search-standalone&type=standard&origin=showNewTab#sol=0318f4876c34d9fa0533b9cfe4cfb839a01b9134" } ,
        ] , 

        // Part V : Activities & Facilities in department 
        activities_facilities_in_dept : [
            {   title : "Chemical Engineering Job Fair 2025" , image_source : "./assets/img/chemical_eng_21050/che_job_fair.jpg" , 
                desc : "งาน Job Fair ค้นหาสายงานที่ชื่นชอบในอุตสาหกรรมเคมี" } ,
                    
            {   title : "ห้องปฎิบัติการวิศวกรรมเคมี" , image_source : "./assets/img/chemical_eng_21050/lab_chem_eng.png" , 
                desc : "ห้อง Lab สำหรับนิสิตภาคเคมี มีอุปกรณ์ใน Lab ครบครัน อยู่บริเวณตึก 4 ภาควิชา" } ,       
        ] , 

        // Part VI : Additional Info 
        additional_info : [
            {   title : "" } , 
            {   title : "พาทัวร์โรงงาน ThaiOil By เสือร้องไห้" , link : "https://youtu.be/q8fHKdDvX4k?si=pfqZqKiibWemHY6L" } 
        ]
    } ,  

    { 
        dept_id: 21060 , 
        name: "Georesources", 
        th_name: "วิศวกรรมทรัพยากรธรณี", 
        icon: "🪨", 
        color: "#956f59ff", 
        dept_web : "https://mining.eng.chula.ac.th/" , 
        image: "./assets/img/georesources_eng_21060/georesources_eng.png", 
                
        // Part II : Personality & Caption for department 
        desc : "อุตสาหกรรมเหมืองเเร่ คุณค่าสำหรับการพัฒนาอุตสาหกรรมเหมืองเเร่ในอนาคต",
        personality : "สนใจเกี่ยวกับ เหมืองเเร่ ธรณีวิทยา การสำรวจทรัพยากรธรรมชาติ" , 
        checklist : "ลองศึกษาเกี่ยวกับธรณีวิทยาเบื้องต้น วิทยาศาสตร์โลก และการสำรวจทรัพยากรธรรมชาติ" ,

        // Part III : Tracks 
        tracks: [] , // No Tracks

        // Part IV : Career Path & Jobs
        career_path : [
            {   title : "Mining Engineer (ตรงสาย)" , 
                desc : "สายงานนี้จะเน้นไปที่การขุดเจาะปล่องเหมือง การวางระบบถ่ายเทอากาศภายในเหมือง ระบบค้ำยันพื้นดิน "  ,
                link : "https://th.jobsdb.com/th/job/88901244?type=standard&origin=showNewTab#sol=1a980ba3fc525da79e4e0db0eef0f496f29a582a" } , 

            {   title : "Geotechnical Engineer (ตรงสาย)" , 
                desc : "สายงานนี้ทำเกี่ยวกับการสำรวจเหมือง วิเคราะห์ทรัพยากรธรรมชาติ รวมถึงการออกเเบบงานธรณีวิทยาต่างๆ ถือเป็นสายงานที่น่าสนใจมาก"  ,
                link : "https://th.jobsdb.com/th/job/89151672?type=standard&origin=showNewTab#sol=59d0f19f0fdc86881acc837c29209a5b1d775a65" } , 

        ] , 

        // Part V : Activities & Facilities in department 
        activities_facilities_in_dept : [
            {   title : "Lab วิศวกรรมเหมืองเเร่" , image_source : "./assets/img/georesources_eng_21060/lab_geo.png" , 
                desc : "ห้อง Lab สำหรับภาควิชาวิศวกรรมเหมืองเเร่ สำหรับทดลองเกี่ยวกับเเร่ต่างๆ อยู่ตรงข้ามตึกภาคโยธา" } 
        ] , 

        // Part VI : Additional Info 
        additional_info : [
            {   title : "คลิป Open House วิศวกรรมเหมืองเเร่" , link : "https://youtu.be/IkY_Aw3uW1g?si=eGFJsOvfAiDBZGc8" } , 
            {   title : "พูดจาประสาช่าง วิศวกรรมเหมืองเเร่ จุฬาฯ" , link : "https://youtu.be/xWxnWZNpTmg?si=GUJl4cPFJcx7IWE7" } 
        ]
    } , 

    { 
        dept_id: 21061 , 
        name: "Petroleum", 
        th_name: "วิศวกรรมปิโตรเลียม", 
        icon: "🛢️", 
        color: "#5e5e5eff", 
        dept_web : "https://mining.eng.chula.ac.th/" , 
        image: "./assets/img/petroleum_eng_21061/petroleum_eng.png", 
                
        // Part II : Personality & Caption for department 
        desc : "ยังไม่เสร็จ -> อุตสาหกรรมน้ำมันและเเก๊ส ศาสตร์ที่เปลี่ยนพลังงานใต้ผืนโลกให้ขับเคลื่อนชีวิตบนผิวโลก",
        personality : "สนใจเกี่ยวกับการขุดเจาะน้ำมัน เทคโนโลยีการขุดเจาะ ทรัพยากรธรรมชาติ" , 
        checklist : "ลองศึกษาเกี่ยวกับ Reservoir Drilling และพื้นฐานวิชาภาคปิโตรเลียม" ,

        // Part III : Tracks 
        tracks: [] , 

        // Part IV : Career Path & Jobs
        career_path : [
            {   title : "Mechatronics / Robotics Engineer (กึ่งตรงสาย)" , 
                desc : "สายงานนี้เน้นไปที่การพัฒนาระบบของหุ่นยนต์และแมคคาทรอนิกส์ โดยควรจะต้องรู้พื้นฐาน PLC และ SCADA เบื้องต้น ซึ่งประยุกต์ Logic จากการมองเป็นระบบกลไก"  ,
                link : "https://th.jobsdb.com/th/job/88901244?type=standard&origin=showNewTab#sol=1a980ba3fc525da79e4e0db0eef0f496f29a582a" } , 

            {   title : "Automation Engineer (ตรงสาย)" , 
                desc : "สายงานนี้เน้นไปที่การเเก้ปัญหา Automation Machine เป็นที่น่าสนใจเนื่องจากมีการประยุกต์หลายๆศาสตร์เข้าด้วยกัน เช่น Machine Learning , Mechanical Design , Mechatronics"  ,
                link : "https://th.jobsdb.com/th/job/89082121?type=standard&origin=showNewTab#sol=6662aff3acce4a4e3da303356a92676ac3837a08" } , 

            {   title : "Maintenance Engineer (ตรงสาย)" , 
                desc : "งานนี้เน้นไปที่การซ่อมบำรุงเครื่องจักร รวมถึงเเก้ปัญหากับช่างเทคนิค ซึ่งมีการทำงานร่วมกับฝ่ายอื่นๆด้วย โดยนำความรู้ที่เรียนมาเเก้ปัญหาเครื่องจักร"  ,
                link : "https://th.jobsdb.com/th/job/89227373?type=standard&origin=showNewTab#sol=bc39a9ff0e4b02aae961db2e341b824fa2bac1fb" } , 

            {   title : "Data Engineer (เบนสาย)" , 
                desc : "เป็นสายงานที่ค่อนข้างฮิต โดยเป้นการออกเเบบ Pipeline สำหรับการเก็บข้อมูล จากอุปกรณ์ต่างๆ เช่น PLC , SCADA , ERP และนำข้อมูลไปวิเคราะห์ต่อ"  ,
                link : "https://th.jobsdb.com/th/job/89152343?type=standard&origin=showNewTab#sol=116c4b613aaf9ed7898e9f6930e2463c4c9047d8" } , 
        ] , 

        // Part V : Activities & Facilities in department 
        activities_facilities_in_dept : [
            {   title : "Chevron Lab" , image_source : "./assets/img/mechanical_eng_21030/mi_workspace.jpg" , 
                desc : "ห้อง MI สำหรับนิสิตที่สนใจในการลองทำ Workshop ต่ายๆ เช่น 3D Printing , Laser Cut" } ,
            {   title : "ชมรม EIC Chula" , image_source : "./assets/img/mechanical_eng_21030/eic_chula.jpg" , 
                desc : "ชมรมสำหรับนักประดิษฐ์ที่สนใจในการประดิษฐ์ คิดคนนวัตกรรมต่างๆ เช่น หุ่นยนต์" } 
        ] , 

        // Part VI : Additional Info 
        additional_info : [
            {   title : "คลิปเเนะนำหลักสูตร ME by ME104" , link : "https://youtu.be/fO1z2X_WyXo?si=MtFGd24PNQk_wAL0" } , 
            {   title : "พูดจาประสาช่าง วิศวกรรมเครื่องกล จุฬาฯ" , link : "https://youtu.be/3EYDv1O-9GM?si=MK8rSI_e1Tkb8e6a" } 
        ]
    } ,  

    { 
        dept_id: 21070 , 
        name: "Environmental", 
        th_name: "วิศวกรรมสิ่งเเวดล้อม", 
        icon: "🌱", 
        color: "#12b03cff", 
        dept_web : "https://env.eng.chula.ac.th/?page_id=348" , 
        image: "./assets/img/environmental_eng_21070/environmental_eng.png", 
        // Part II : Personality & Caption for department 
        desc : "ยังไม่เสร็จ",
        personality : "สนใจเกี่ยวกับ ระบบกลไกต่างๆ การสร้างอุปกรณ์เชิงกล รวมถึงการเเก้ปัญหาทางวิศวกรรม" , 
        checklist : "ลองศึกษาระบบกลไกของหุ่นยนต์เเบบเบื้องต้น , ทบทวนเนื้อหา Gen Phys I ให้เเม่นๆ , ฝึกทำ CAD ในหลายๆชิ้นงาน" ,

        // Part III : Tracks 
        tracks: [
            { title: "📦 กลุ่มวิชา Solids", detail: "กลุ่มวิชาที่ศึกษาเกี่ยวกับการรับเเรงของวัสดุ" },
            { title: "🤖 กลุ่มวิชา Dynamics - Control", detail: "กลุ่มวิชาที่ศึกษาการควบคุมที่มีการเปลี่ยนเเปลงตามเวลา เช่น หุ่นยนต์ , ระบบ Mechatronics" },
            { title: "💧 กลุ่มวิชา Fluid", detail: "กลุ่มวิชาที่ศึกษาเกี่ยวกับระบบของการไหลของวัตถุ เช่น การไหลของน้ำในท่อ การไหลของอากาศที่ปีกเครื่องบิน" },
            { title: "🥵 กลุ่มวิชา Thermal - Energy", detail: "กลุ่มวิชาที่ศึกษาเกี่ยวกับการถ่ายเทพลังงานความร้อน เเละการเปลี่ยนเเปลงของพลังงาน" } ,
            { title: "⚛️ กลุ่มวิชา Modern Mechanics & Manufacturing", detail: "กลุ่มวิชาที่จะนำความรู้หลาย ๆ สายมารวมกันเพื่อสร้างนวัตกรรม เช่น Micro-Electromechanical Systems และ Nanotechnology " }
        ] , 

        // Part IV : Career Path & Jobs
        career_path : [
            {   title : "Mechatronics / Robotics Engineer (กึ่งตรงสาย)" , 
                desc : "สายงานนี้เน้นไปที่การพัฒนาระบบของหุ่นยนต์และแมคคาทรอนิกส์ โดยควรจะต้องรู้พื้นฐาน PLC และ SCADA เบื้องต้น ซึ่งประยุกต์ Logic จากการมองเป็นระบบกลไก"  ,
                link : "https://th.jobsdb.com/th/job/88901244?type=standard&origin=showNewTab#sol=1a980ba3fc525da79e4e0db0eef0f496f29a582a" } , 

            {   title : "Automation Engineer (ตรงสาย)" , 
                desc : "สายงานนี้เน้นไปที่การเเก้ปัญหา Automation Machine เป็นที่น่าสนใจเนื่องจากมีการประยุกต์หลายๆศาสตร์เข้าด้วยกัน เช่น Machine Learning , Mechanical Design , Mechatronics"  ,
                link : "https://th.jobsdb.com/th/job/89082121?type=standard&origin=showNewTab#sol=6662aff3acce4a4e3da303356a92676ac3837a08" } , 

            {   title : "Maintenance Engineer (ตรงสาย)" , 
                desc : "งานนี้เน้นไปที่การซ่อมบำรุงเครื่องจักร รวมถึงเเก้ปัญหากับช่างเทคนิค ซึ่งมีการทำงานร่วมกับฝ่ายอื่นๆด้วย โดยนำความรู้ที่เรียนมาเเก้ปัญหาเครื่องจักร"  ,
                link : "https://th.jobsdb.com/th/job/89227373?type=standard&origin=showNewTab#sol=bc39a9ff0e4b02aae961db2e341b824fa2bac1fb" } , 

            {   title : "Data Engineer (เบนสาย)" , 
                desc : "เป็นสายงานที่ค่อนข้างฮิต โดยเป้นการออกเเบบ Pipeline สำหรับการเก็บข้อมูล จากอุปกรณ์ต่างๆ เช่น PLC , SCADA , ERP และนำข้อมูลไปวิเคราะห์ต่อ"  ,
                link : "https://th.jobsdb.com/th/job/89152343?type=standard&origin=showNewTab#sol=116c4b613aaf9ed7898e9f6930e2463c4c9047d8" } , 
        ] , 

        // Part V : Activities & Facilities in department 
        activities_facilities_in_dept : [
            {   title : "MI Workspace ตึก 100 ปี" , image_source : "./assets/img/mechanical_eng_21030/mi_workspace.jpg" , 
                desc : "ห้อง MI สำหรับนิสิตที่สนใจในการลองทำ Workshop ต่ายๆ เช่น 3D Printing , Laser Cut" } ,
            {   title : "ชมรม EIC Chula" , image_source : "./assets/img/mechanical_eng_21030/eic_chula.jpg" , 
                desc : "ชมรมสำหรับนักประดิษฐ์ที่สนใจในการประดิษฐ์ คิดคนนวัตกรรมต่างๆ เช่น หุ่นยนต์" } 
        ] , 

        // Part VI : Additional Info 
        additional_info : [
            {   title : "คลิปเเนะนำหลักสูตร ME by ME104" , link : "https://youtu.be/fO1z2X_WyXo?si=MtFGd24PNQk_wAL0" } , 
            {   title : "พูดจาประสาช่าง วิศวกรรมเครื่องกล จุฬาฯ" , link : "https://youtu.be/3EYDv1O-9GM?si=MK8rSI_e1Tkb8e6a" } 
        ]
    } , 

    { 
        dept_id: 21080 , 
        name: "Survey", 
        th_name: "วิศวกรรมสำรวจ", 
        icon: "🗺️", 
        color: "#3c9ee99f", 
        dept_web : "https://sv.eng.chula.ac.th/" , 
        image: "./assets/img/survey_eng_21080/survey_eng.png", 
        // Part II : Personality & Caption for department 
        desc : "ยังไม่เสร็จ",
        personality : "สนใจเกี่ยวกับ ระบบกลไกต่างๆ การสร้างอุปกรณ์เชิงกล รวมถึงการเเก้ปัญหาทางวิศวกรรม" , 
        checklist : "ลองศึกษาระบบกลไกของหุ่นยนต์เเบบเบื้องต้น , ทบทวนเนื้อหา Gen Phys I ให้เเม่นๆ , ฝึกทำ CAD ในหลายๆชิ้นงาน" ,

        // Part III : Tracks 
        tracks: [
            { title: "📦 กลุ่มวิชา Solids", detail: "กลุ่มวิชาที่ศึกษาเกี่ยวกับการรับเเรงของวัสดุ" },
            { title: "🤖 กลุ่มวิชา Dynamics - Control", detail: "กลุ่มวิชาที่ศึกษาการควบคุมที่มีการเปลี่ยนเเปลงตามเวลา เช่น หุ่นยนต์ , ระบบ Mechatronics" },
            { title: "💧 กลุ่มวิชา Fluid", detail: "กลุ่มวิชาที่ศึกษาเกี่ยวกับระบบของการไหลของวัตถุ เช่น การไหลของน้ำในท่อ การไหลของอากาศที่ปีกเครื่องบิน" },
            { title: "🥵 กลุ่มวิชา Thermal - Energy", detail: "กลุ่มวิชาที่ศึกษาเกี่ยวกับการถ่ายเทพลังงานความร้อน เเละการเปลี่ยนเเปลงของพลังงาน" } ,
            { title: "⚛️ กลุ่มวิชา Modern Mechanics & Manufacturing", detail: "กลุ่มวิชาที่จะนำความรู้หลาย ๆ สายมารวมกันเพื่อสร้างนวัตกรรม เช่น Micro-Electromechanical Systems และ Nanotechnology " }
        ] , 

        // Part IV : Career Path & Jobs
        career_path : [
            {   title : "Mechatronics / Robotics Engineer (กึ่งตรงสาย)" , 
                desc : "สายงานนี้เน้นไปที่การพัฒนาระบบของหุ่นยนต์และแมคคาทรอนิกส์ โดยควรจะต้องรู้พื้นฐาน PLC และ SCADA เบื้องต้น ซึ่งประยุกต์ Logic จากการมองเป็นระบบกลไก"  ,
                link : "https://th.jobsdb.com/th/job/88901244?type=standard&origin=showNewTab#sol=1a980ba3fc525da79e4e0db0eef0f496f29a582a" } , 

            {   title : "Automation Engineer (ตรงสาย)" , 
                desc : "สายงานนี้เน้นไปที่การเเก้ปัญหา Automation Machine เป็นที่น่าสนใจเนื่องจากมีการประยุกต์หลายๆศาสตร์เข้าด้วยกัน เช่น Machine Learning , Mechanical Design , Mechatronics"  ,
                link : "https://th.jobsdb.com/th/job/89082121?type=standard&origin=showNewTab#sol=6662aff3acce4a4e3da303356a92676ac3837a08" } , 

            {   title : "Maintenance Engineer (ตรงสาย)" , 
                desc : "งานนี้เน้นไปที่การซ่อมบำรุงเครื่องจักร รวมถึงเเก้ปัญหากับช่างเทคนิค ซึ่งมีการทำงานร่วมกับฝ่ายอื่นๆด้วย โดยนำความรู้ที่เรียนมาเเก้ปัญหาเครื่องจักร"  ,
                link : "https://th.jobsdb.com/th/job/89227373?type=standard&origin=showNewTab#sol=bc39a9ff0e4b02aae961db2e341b824fa2bac1fb" } , 

            {   title : "Data Engineer (เบนสาย)" , 
                desc : "เป็นสายงานที่ค่อนข้างฮิต โดยเป้นการออกเเบบ Pipeline สำหรับการเก็บข้อมูล จากอุปกรณ์ต่างๆ เช่น PLC , SCADA , ERP และนำข้อมูลไปวิเคราะห์ต่อ"  ,
                link : "https://th.jobsdb.com/th/job/89152343?type=standard&origin=showNewTab#sol=116c4b613aaf9ed7898e9f6930e2463c4c9047d8" } , 
        ] , 

        // Part V : Activities & Facilities in department 
        activities_facilities_in_dept : [
            {   title : "MI Workspace ตึก 100 ปี" , image_source : "./assets/img/mechanical_eng_21030/mi_workspace.jpg" , 
                desc : "ห้อง MI สำหรับนิสิตที่สนใจในการลองทำ Workshop ต่ายๆ เช่น 3D Printing , Laser Cut" } ,
            {   title : "ชมรม EIC Chula" , image_source : "./assets/img/mechanical_eng_21030/eic_chula.jpg" , 
                desc : "ชมรมสำหรับนักประดิษฐ์ที่สนใจในการประดิษฐ์ คิดคนนวัตกรรมต่างๆ เช่น หุ่นยนต์" } 
        ] , 

        // Part VI : Additional Info 
        additional_info : [
            {   title : "คลิปเเนะนำหลักสูตร ME by ME104" , link : "https://youtu.be/fO1z2X_WyXo?si=MtFGd24PNQk_wAL0" } , 
            {   title : "พูดจาประสาช่าง วิศวกรรมเครื่องกล จุฬาฯ" , link : "https://youtu.be/3EYDv1O-9GM?si=MK8rSI_e1Tkb8e6a" } 
        ]
    } , 

    { 
        dept_id: 21090 , 
        name: "Metallurgical", 
        th_name: "วิศวกรรมสำรวจ", 
        icon: "⚒️", 
        color: "#939494ff",
        dept_web : "https://metal.eng.chula.ac.th/site" ,  
        image: "./assets/img/metal_eng_21090/metallurgical_eng.png", 
        // Part II : Personality & Caption for department 
        desc : "ยังไม่เสร็จ",
        personality : "สนใจเกี่ยวกับ ระบบกลไกต่างๆ การสร้างอุปกรณ์เชิงกล รวมถึงการเเก้ปัญหาทางวิศวกรรม" , 
        checklist : "ลองศึกษาระบบกลไกของหุ่นยนต์เเบบเบื้องต้น , ทบทวนเนื้อหา Gen Phys I ให้เเม่นๆ , ฝึกทำ CAD ในหลายๆชิ้นงาน" ,

        // Part III : Tracks 
        tracks: [
            { title: "📦 กลุ่มวิชา Solids", detail: "กลุ่มวิชาที่ศึกษาเกี่ยวกับการรับเเรงของวัสดุ" },
            { title: "🤖 กลุ่มวิชา Dynamics - Control", detail: "กลุ่มวิชาที่ศึกษาการควบคุมที่มีการเปลี่ยนเเปลงตามเวลา เช่น หุ่นยนต์ , ระบบ Mechatronics" },
            { title: "💧 กลุ่มวิชา Fluid", detail: "กลุ่มวิชาที่ศึกษาเกี่ยวกับระบบของการไหลของวัตถุ เช่น การไหลของน้ำในท่อ การไหลของอากาศที่ปีกเครื่องบิน" },
            { title: "🥵 กลุ่มวิชา Thermal - Energy", detail: "กลุ่มวิชาที่ศึกษาเกี่ยวกับการถ่ายเทพลังงานความร้อน เเละการเปลี่ยนเเปลงของพลังงาน" } ,
            { title: "⚛️ กลุ่มวิชา Modern Mechanics & Manufacturing", detail: "กลุ่มวิชาที่จะนำความรู้หลาย ๆ สายมารวมกันเพื่อสร้างนวัตกรรม เช่น Micro-Electromechanical Systems และ Nanotechnology " }
        ] , 

        // Part IV : Career Path & Jobs
        career_path : [
            {   title : "Mechatronics / Robotics Engineer (กึ่งตรงสาย)" , 
                desc : "สายงานนี้เน้นไปที่การพัฒนาระบบของหุ่นยนต์และแมคคาทรอนิกส์ โดยควรจะต้องรู้พื้นฐาน PLC และ SCADA เบื้องต้น ซึ่งประยุกต์ Logic จากการมองเป็นระบบกลไก"  ,
                link : "https://th.jobsdb.com/th/job/88901244?type=standard&origin=showNewTab#sol=1a980ba3fc525da79e4e0db0eef0f496f29a582a" } , 

            {   title : "Automation Engineer (ตรงสาย)" , 
                desc : "สายงานนี้เน้นไปที่การเเก้ปัญหา Automation Machine เป็นที่น่าสนใจเนื่องจากมีการประยุกต์หลายๆศาสตร์เข้าด้วยกัน เช่น Machine Learning , Mechanical Design , Mechatronics"  ,
                link : "https://th.jobsdb.com/th/job/89082121?type=standard&origin=showNewTab#sol=6662aff3acce4a4e3da303356a92676ac3837a08" } , 

            {   title : "Maintenance Engineer (ตรงสาย)" , 
                desc : "งานนี้เน้นไปที่การซ่อมบำรุงเครื่องจักร รวมถึงเเก้ปัญหากับช่างเทคนิค ซึ่งมีการทำงานร่วมกับฝ่ายอื่นๆด้วย โดยนำความรู้ที่เรียนมาเเก้ปัญหาเครื่องจักร"  ,
                link : "https://th.jobsdb.com/th/job/89227373?type=standard&origin=showNewTab#sol=bc39a9ff0e4b02aae961db2e341b824fa2bac1fb" } , 

            {   title : "Data Engineer (เบนสาย)" , 
                desc : "เป็นสายงานที่ค่อนข้างฮิต โดยเป้นการออกเเบบ Pipeline สำหรับการเก็บข้อมูล จากอุปกรณ์ต่างๆ เช่น PLC , SCADA , ERP และนำข้อมูลไปวิเคราะห์ต่อ"  ,
                link : "https://th.jobsdb.com/th/job/89152343?type=standard&origin=showNewTab#sol=116c4b613aaf9ed7898e9f6930e2463c4c9047d8" } , 
        ] , 

        // Part V : Activities & Facilities in department 
        activities_facilities_in_dept : [
            {   title : "MI Workspace ตึก 100 ปี" , image_source : "./assets/img/mechanical_eng_21030/mi_workspace.jpg" , 
                desc : "ห้อง MI สำหรับนิสิตที่สนใจในการลองทำ Workshop ต่ายๆ เช่น 3D Printing , Laser Cut" } ,
            {   title : "ชมรม EIC Chula" , image_source : "./assets/img/mechanical_eng_21030/eic_chula.jpg" , 
                desc : "ชมรมสำหรับนักประดิษฐ์ที่สนใจในการประดิษฐ์ คิดคนนวัตกรรมต่างๆ เช่น หุ่นยนต์" } 
        ] , 

        // Part VI : Additional Info 
        additional_info : [
            {   title : "คลิปเเนะนำหลักสูตร ME by ME104" , link : "https://youtu.be/fO1z2X_WyXo?si=MtFGd24PNQk_wAL0" } , 
            {   title : "พูดจาประสาช่าง วิศวกรรมเครื่องกล จุฬาฯ" , link : "https://youtu.be/3EYDv1O-9GM?si=MK8rSI_e1Tkb8e6a" } 
        ]
    } ,  

        { 
        dept_id: 21100 , 
        name: "Computer", 
        th_name: "วิศวกรรมคอมพิวเตอร์", 
        icon: "🖥️", 
        color: "#ad139677", 
        dept_web : "https://www.cp.eng.chula.ac.th/future/bachelor" , 
        image: "./assets/img/computer_eng_21100/computer_eng.png", 
        // Part II : Personality & Caption for department 
        desc : "จากไฟฟ้าสู่คอมพิวเตอร์ เทคโนโลยีที่ขับเคลื่อนมนุษยชาติไปสู่ความก้าวหน้า",
        personality : "สนใจเกี่ยวกับการเเก้ปัญหาทางคอมพิวเตอร์ สนใจเทคโนโลยีใหม่ๆ รวมถึงสนใจเกี่ยวกับการคิดค้นนวัตกรรมทางเทคโนโลยีใหม่ๆ" , 
        checklist : "ลองฝึก Logic การเขียนโปรเเกรมให้คล่อง , ลองสร้าง Mini Project ตามด้านที่สนใจ เช่น Web Developemnt , ลองศึกษาพื้นฐานของ Computer Hardware เช่น Digital Logic Design , Embedded System" ,

        // Part III : Tracks 
        tracks: [
            { title: "🤖 กลุ่มวิชาพื้นฐาน Hardware", detail: "กลุ่มวิชาที่ศึกษาเกี่ยวกับระบบการทำงานของคอมพิวเตอร์ เช่น Embedded System , Digital Computer Logic Design , Computer System Architecture" },
            { title: "🔢 กลุ่มวิชาพื้นฐาน Math", detail: "กลุ่มวิชาที่ศึกษาพื้นฐานคณิตศาสตร์ที่จำเป้นต้องใช้งาน เช่น Linear Algebra , Signal , Convolution , Discrete Math , Statistics"},
            { title: "💻 กลุ่มวิชาพื้นฐาน Programming", detail: "กลุ่มวิชาที่ศึกษาเกี่ยวกับ Logic พื้นฐานของการเขียนโปรเเกรม เช่น Computer Programming , Data Structure , Algorithm Design" },
            { title: "🧑🏼‍💻 กลุ่มวิชาพื้นฐาน Software Development", detail: "กลุ่มวิชาที่ศึกษาเกี่ยวกับพื้นฐานการพัฒนา Software ต่างๆ เช่น Front-end Development , Back-end Development" } ,
            { title: "⚙️ กลุ่มวิชาพื้นฐาน System", detail: "กลุ่มวิชาที่ศึกษาเกี่ยวกับระบบทางคอมพิวเตอร์ต่างๆ เช่น Operating System , Computer Network , Computer Security" }
        ] , 

        // Part IV : Career Path & Jobs
        career_path : [
            {   title : "Data Scientist (ตรงสาย)" , 
                desc : "สายงานนี้ค่อนข้างเป็นที่นิยมมากๆ หน้าที่หลักๆคือ วิเคราะห์ข้อมูลเพื่อหา Insight , สร้างแบบจำลองทางสถิติ โดยใช้ Python / Machine Learning / SQL / Data Visualization ในการทำงาน"  ,
                link : "https://th.jobsdb.com/th/job/89280752?pos=1&origin=showNewTab#sol=cde735b0c15261c509365838c41ef75a83a544c5" } , 

            {   title : "Full-stack Developer (ตรงสาย)" , 
                desc : "ถือเป็นอีกงานที่น่าสนใจเเละเป็นที่นิยมมากๆ ซึ่งจะต้องพัฒนาทั้งในส่วน Front-end และ Back-end (ภาษาขึ้นกับบริษัทที่ต้องการ)"  ,
                link : "https://th.jobsdb.com/th/full-stack-dev-jobs?jobId=88853002&type=standard" } , 

            {   title : "AI Engineer (กึ่งตรงสาย)" , 
                desc : "สายงานนี้มีความน่าสนใจ เนื่องจากเป็นการปรับปรุง Model ให้ดีขึ้น ซึ่งสามารถที่จะนำโมเดลที่เราพัฒนาเพื่อนำไปใช้ในงานต่างๆได้"  ,
                link : "https://th.jobsdb.com/th/job/88963681?type=standard&origin=showNewTab#sol=79d1be069fce597f5a40f4aa3e784006340a7aa3" } , 

            {   title : "Technical Consultant (เบนสาย)" , 
                desc : "ถือว่าเป็นสายงานที่น่าสนใจมากๆ เนื่องจากมีการประยุกต์ใช้ความรู้ทางธุรกิจ เพื่อจะนำมาหา Solution ที่เหมาะสมในเชิงธุรกิจ โดยยังต้องอิง Technical Skill ในระดับหนึ่ง เช่น Database"  ,
                link : "https://th.jobsdb.com/th/job/88303922?type=standard&origin=showNewTab#sol=5ff837bfb0c4349b99f40b651332e3f3df6ae298" } , 
        ] , 

        // Part V : Activities & Facilities in department 
        activities_facilities_in_dept : [
            {   title : "CP Sky Cafe" , image_source : "./assets/img/computer_eng_21100/cp_sky_cafe.jpg" , 
                desc : "ห้อง Sky Cafe ตึก 4 ชั้น 19 ห้องสำหรับนิสิตภาคคอมฯ เป็น Co-Workign Space ให้คิดค้นนวัตกรรมใหม่ๆได้เสมอ 💡" } ,

            {   title : "กิจกรรม COMSAMPAN" , image_source : "./assets/img/computer_eng_21100/cp_comsampan.jpg" , 
                desc : "กิจกรรมเชื่อมสัมพันธ์นิสิตวิศวกรรมคอมพิวเตอร์ จากหลายๆมหาลัย มาเเข่งกีฬากัน เพิ่มทั้งมิตรภาพเเละคอนเนคชั่นใหม่ๆ 💪🏻" } ,

            {   title : "ศูนย์คอมพิวเตอร์ คณะวิศวกรรมศาสตร์" , image_source : "./assets/img/computer_eng_21100/engineering_computer_center.jpg" , 
                desc : "ห้องคอมพิวเตอร์สำหรับนิสิตคณะวิศวกรรมศาสตร์ ใช้เป็นศูนย์ทดสอบของวิชาในภาคคอมพิวเตอร์ค่อนข้างบ่อยครับ" } ,

            {   title : "CPCU Job Fair 2025" , image_source : "./assets/img/computer_eng_21100/cpcu_job_fair_2025.webp" , 
                desc : "Job Fair จัดโดยภาคคอมฯ เหมาะสำหรับคนที่สนใจในสายงานเทคโนโลยี เเละด้านต่างๆ ที่เกี่ยวข้อง เข่น Developer , Cyber Security , Data Analyst" } ,    
        ] , 

        // Part VI : Additional Info 
        additional_info : [
            {   title : "คลิปเเนะนำหลักสูตรวิศวกรรมคอมพิวเตอร์ (CP) [หลักสูตรเก่า]" , link : "https://youtu.be/IBnyrumACWs?si=3nytOM7b5ymdbtm5" } , 
            {   title : "รีวิวหลักสูตร CP vs CEDT ต่างกันยังไง ??" , link : "https://youtu.be/ZDQZCOxlCDE?si=a5LiZ5B6UvPc08KD" } 
        ]
    } , 

        { 
        dept_id: 21111 , 
        name: "Nuclear", 
        th_name: "วิศวกรรมนิวเคลียร์", 
        icon: "⚛️", 
        color: "#23c54e9f", 
        dept_web : "https://ne.eng.chula.ac.th/wp/index.php/programs/b-eng/" , 
        image: "assets/img/nuclear_eng_21111/nuclear_eng.png", 
        // Part II : Personality & Caption for department 
        desc : "ยังไม่เสร็จ",
        personality : "สนใจเกี่ยวกับ ระบบกลไกต่างๆ การสร้างอุปกรณ์เชิงกล รวมถึงการเเก้ปัญหาทางวิศวกรรม" , 
        checklist : "ลองศึกษาระบบกลไกของหุ่นยนต์เเบบเบื้องต้น , ทบทวนเนื้อหา Gen Phys I ให้เเม่นๆ , ฝึกทำ CAD ในหลายๆชิ้นงาน" ,

        // Part III : Tracks 
        tracks: [
            { title: "📦 กลุ่มวิชา Solids", detail: "กลุ่มวิชาที่ศึกษาเกี่ยวกับการรับเเรงของวัสดุ" },
            { title: "🤖 กลุ่มวิชา Dynamics - Control", detail: "กลุ่มวิชาที่ศึกษาการควบคุมที่มีการเปลี่ยนเเปลงตามเวลา เช่น หุ่นยนต์ , ระบบ Mechatronics" },
            { title: "💧 กลุ่มวิชา Fluid", detail: "กลุ่มวิชาที่ศึกษาเกี่ยวกับระบบของการไหลของวัตถุ เช่น การไหลของน้ำในท่อ การไหลของอากาศที่ปีกเครื่องบิน" },
            { title: "🥵 กลุ่มวิชา Thermal - Energy", detail: "กลุ่มวิชาที่ศึกษาเกี่ยวกับการถ่ายเทพลังงานความร้อน เเละการเปลี่ยนเเปลงของพลังงาน" } ,
            { title: "⚛️ กลุ่มวิชา Modern Mechanics & Manufacturing", detail: "กลุ่มวิชาที่จะนำความรู้หลาย ๆ สายมารวมกันเพื่อสร้างนวัตกรรม เช่น Micro-Electromechanical Systems และ Nanotechnology " }
        ] , 

        // Part IV : Career Path & Jobs
        career_path : [
            {   title : "Mechatronics / Robotics Engineer (กึ่งตรงสาย)" , 
                desc : "สายงานนี้เน้นไปที่การพัฒนาระบบของหุ่นยนต์และแมคคาทรอนิกส์ โดยควรจะต้องรู้พื้นฐาน PLC และ SCADA เบื้องต้น ซึ่งประยุกต์ Logic จากการมองเป็นระบบกลไก"  ,
                link : "https://th.jobsdb.com/th/job/88901244?type=standard&origin=showNewTab#sol=1a980ba3fc525da79e4e0db0eef0f496f29a582a" } , 

            {   title : "Automation Engineer (ตรงสาย)" , 
                desc : "สายงานนี้เน้นไปที่การเเก้ปัญหา Automation Machine เป็นที่น่าสนใจเนื่องจากมีการประยุกต์หลายๆศาสตร์เข้าด้วยกัน เช่น Machine Learning , Mechanical Design , Mechatronics"  ,
                link : "https://th.jobsdb.com/th/job/89082121?type=standard&origin=showNewTab#sol=6662aff3acce4a4e3da303356a92676ac3837a08" } , 

            {   title : "Maintenance Engineer (ตรงสาย)" , 
                desc : "งานนี้เน้นไปที่การซ่อมบำรุงเครื่องจักร รวมถึงเเก้ปัญหากับช่างเทคนิค ซึ่งมีการทำงานร่วมกับฝ่ายอื่นๆด้วย โดยนำความรู้ที่เรียนมาเเก้ปัญหาเครื่องจักร"  ,
                link : "https://th.jobsdb.com/th/job/89227373?type=standard&origin=showNewTab#sol=bc39a9ff0e4b02aae961db2e341b824fa2bac1fb" } , 

            {   title : "Data Engineer (เบนสาย)" , 
                desc : "เป็นสายงานที่ค่อนข้างฮิต โดยเป้นการออกเเบบ Pipeline สำหรับการเก็บข้อมูล จากอุปกรณ์ต่างๆ เช่น PLC , SCADA , ERP และนำข้อมูลไปวิเคราะห์ต่อ"  ,
                link : "https://th.jobsdb.com/th/job/89152343?type=standard&origin=showNewTab#sol=116c4b613aaf9ed7898e9f6930e2463c4c9047d8" } , 
        ] , 

        // Part V : Activities & Facilities in department 
        activities_facilities_in_dept : [
            {   title : "MI Workspace ตึก 100 ปี" , image_source : "./assets/img/mechanical_eng_21030/mi_workspace.jpg" , 
                desc : "ห้อง MI สำหรับนิสิตที่สนใจในการลองทำ Workshop ต่ายๆ เช่น 3D Printing , Laser Cut" } ,
            {   title : "ชมรม EIC Chula" , image_source : "./assets/img/mechanical_eng_21030/eic_chula.jpg" , 
                desc : "ชมรมสำหรับนักประดิษฐ์ที่สนใจในการประดิษฐ์ คิดคนนวัตกรรมต่างๆ เช่น หุ่นยนต์" } 
        ] , 

        // Part VI : Additional Info 
        additional_info : [
            {   title : "คลิปเเนะนำหลักสูตร ME by ME104" , link : "https://youtu.be/fO1z2X_WyXo?si=MtFGd24PNQk_wAL0" } , 
            {   title : "พูดจาประสาช่าง วิศวกรรมเครื่องกล จุฬาฯ" , link : "https://youtu.be/3EYDv1O-9GM?si=MK8rSI_e1Tkb8e6a" } 
        ]
    } , 
    
];

// 2. เริ่มทำงานเมื่อโหลดหน้าเว็บ
document.addEventListener('DOMContentLoaded', () => {
    
    const btnContainer = document.getElementById('buttons-container');
    const displayArea = document.getElementById('display-area');

    // ตรวจสอบว่าหา Container เจอไหม (Debug)
    if (!btnContainer) {
        console.error("❌ หา id='buttons-container' ไม่เจอ! เช็ค HTML ด่วน");
        return;
    }

    // สร้างปุ่มเมนู
    departments.forEach((dept, index) => {
        const btn = document.createElement('div');
        btn.className = 'dept-btn';
        btn.innerHTML = `<span class="me-1">${dept.icon}</span> ${dept.name}`;
        
        btn.onclick = () => {
            // Reset ปุ่มเก่า
            document.querySelectorAll('.dept-btn').forEach(b => {
                b.classList.remove('active');
                b.style.backgroundColor = 'rgba(255,255,255,0.9)';
                b.style.borderColor = 'transparent';
            });

            // Set ปุ่มใหม่
            btn.classList.add('active');
            btn.style.backgroundColor = dept.color;
            btn.style.borderColor = dept.color;

            // เลื่อนหาปุ่ม (Scroll)
            btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

            // แสดงข้อมูล
            renderContent(dept);
        };

        btnContainer.appendChild(btn);

        // กดปุ่มแรกอัตโนมัติ
        if (index === 0) setTimeout(() => btn.click(), 100);
    });

    // ฟังก์ชันแสดงข้อมูล (Render)
    // ฟังก์ชันแสดงข้อมูล (Layout ใหม่: Tracks เต็มจอข้างล่าง)
    function renderContent(data) { // data = json (database) of departments
        
        // ---- Zone 1 : Create Elements HTML Tags
        // 1. Tracks & Subjects 
        let tracksHTML = '';
        if (data.tracks && data.tracks.length > 0) {
            tracksHTML = data.tracks.map(track => `
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="sub-track-card h-100">
                        <div class="d-flex align-items-center mb-2">
                            <i class="bi me-2" style="color: ${data.color}"></i>
                            <h6 class="fw-bold mb-0" style="color: ${data.color}">${track.title}</h6>
                        </div>
                        <p class="small text-muted mb-0">${track.detail}</p>
                    </div>
                </div>
            `).join('');
        } else {
            tracksHTML = `<div class="col-12 text-center text-muted py-4"> ไม่มีข้อมูล Track ย่อยๆ โดยจะเป็นการเรียนรวม และหาความสนใจจากวิชาเลือกเเทน ในส่วนนี้สามารถดูจากเว็บภาคได้เลยครับ </div>`;
        }

        // 2 : Career Path 
        let careerPathHTML = '';
        if (data.career_path && data.career_path.length > 0) {
            careerPathHTML = data.career_path.map(career_path => `
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="sub-track-card h-100">
                        <div class="d-flex align-items-center mb-2">
                            <i class="bi bi-bookmark-star-fill me-2" style="color: ${data.color}"></i>
                            <h6 class="fw-bold mb-0" style="color: ${data.color}">${career_path.title}</h6>
                        </div>
                        <p class="small text-muted mb-0">${career_path.desc}</p>
                        <a href="${career_path.link}" class="btn btn-primary btn-small"> 🧳 ตัวอย่างงาน </a>
                    </div>
                </div>
            `).join('');
        } else {
            careerPathHTML = `<div class="col-12 text-center text-muted py-4"> ไม่มีข้อมูล Track ย่อยๆ โดยจะเป็นการเรียนรวม และหาความสนใจจากวิชาเลือกเเทน ในส่วนนี้สามารถดูจากเว็บภาคได้เลยครับ </div>`;
        }

        // 3 : Activity & Faciliies
        let activitiesHTML = "" ;
        if (data.activities_facilities_in_dept && data.activities_facilities_in_dept.length > 0) {
            activitiesHTML = data.activities_facilities_in_dept.map(activities_facilities_in_dept => `
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="sub-track-card h-100">
                        <div class="d-flex align-items-center mb-2">
                            <i class="bi bi-bookmark-star-fill me-2" style="color: ${data.color}"></i>
                            <h6 class="fw-bold mb-0" style="color: ${data.color}">${activities_facilities_in_dept.title}</h6>
                        </div>

                        <img src = "${activities_facilities_in_dept.image_source}" width = 300 height = 200> </img>
                        <p class="small text-muted mb-0">${activities_facilities_in_dept.desc}</p>
                    </div>
                </div>
            `).join('');
        } else {
            activitiesHTML = `<div class="col-12 text-center text-muted py-4"> ไม่มีข้อมูลกิจกรรมและ Facilities ต่างๆ </div>`;
        }

        // 4 : Additional Sources 
        let additionalInfoHTML = "" ;
        if (data.additional_info && data.additional_info.length > 0) {
            additionalInfoHTML = data.additional_info.map(additional_info => `
                <div class="col-lg-4 col-md-6 mb-4">
                    <a href="${additional_info.link}" class="btn btn-primary btn-small"> 👇🏻 ${additional_info.title} </a>
                </div>
            `).join('');
        } else {
            additionalInfoHTML = `<div class="col-12 text-center text-muted py-4"> ไม่มีข้อมูลลิ้งค์ให้ศึกษาเพิ่มเติม </div>`;
        }


        // 2. จัด Layout ใหม่ (บน: ข้อมูลหลัก / ล่าง: Tracks)
        displayArea.innerHTML = `
            <div class="info-card fade-in" style="--current-theme: ${data.color}">
                <div class="card-header-strip"></div>
                
                <div class="row mb-4">
                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <img src="${data.image}" class="img-fluid rounded shadow w-100" style="object-fit: cover; height: 280px;">
                        
                        <div class="d-grid mt-3">
                            <a href="${data.dept_web}" class="btn btn-dark rounded-pill" style="background-color: ${data.color}; border: none;">
                                เว็บภาควิชาฯ และหลักสูตร <i class="bi bi-arrow-right ms-1"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div class="col-lg-8">
                        <div class="d-flex align-items-center mb-2">
                            <span class="badge rounded-pill me-2 px-3 py-2" style="background-color: ${data.color}; font-weight: normal;">
                                ${data.th_name}
                            </span>
                            <small class="text-muted">รหัสภาควิชา ${data.dept_id}</small>
                        </div>
                        
                        <h2 class="dept-title mb-3" style="font-size: 2.5rem;">
                            <span class="me-2">${data.icon}</span>${data.name + " ENGINEERING"}
                        </h2>
                        
                        <p class="lead text-dark opacity-75" style="line-height: 1.8;">${data.desc}</p>
                        
                        <div class="p-3 bg-light rounded border-start border-4 mt-4" style="border-color: ${data.color} !important;">
                            <h6 class="fw-bold text-muted mb-2"><i class="bi bi-lightbulb-fill me-2"></i>บุคลิกภาพของน้องๆ ที่สนใจในภาควิชานี้ </h6>
                            <p class="mb-0 text-dark">${data.personality || "ไม่มีบุคลิกภาพที่ชัดเจน ภาคนี้เปิดรับสำหรัยน้องๆทุกคน"}</p>
                        </div>

                        <div class="p-3 bg-light rounded border-start border-4 mt-4" style="border-color: ${data.color} !important;">
                            <h6 class="fw-bold text-muted mb-2"><i class="bi bi-star-fill me-2"></i>สิ่งที่เเนะนำให้ลงมือทำก่อนเข้าภาควิชา </h6>
                            <p class="mb-0 text-dark">${data.checklist || "ไม่มีอะไรที่ต้องลมือทำพิเศษ เตรียมตัวให้พร้อมเข้าภาคก็พอครับ"}</p>
                        </div>

                    </div>
                </div>


                <div class="row">
                    <div class="col-12 mb-3">
                        <h4 class="fw-bold" style="color: ${data.color}">
                            <i class="bi bi-diagram-3-fill me-2"></i>กลุ่มวิชา / Track ในภาควิชา
                        </h4>
                    </div>
                        ${tracksHTML}
                </div>

                <div class="row">
                    <div class="col-12 mb-3">
                        <h4 class="fw-bold" style="color: ${data.color}">
                            <i class="bi bi-briefcase-fill me-2"></i>สายงานในภาควิชา 
                        </h4>
                    </div>
                        ${careerPathHTML}
                </div>

                <div class="row">
                    <div class="col-12 mb-3">
                        <h4 class="fw-bold" style="color: ${data.color}">
                            <i class="bi bi-megaphone-fill me-2"></i>กิจกรรม และ Facilities ต่างๆที่เกี่ยวกับภาควิชา 
                        </h4>
                    </div>
                        ${activitiesHTML}
                </div>

                <div class="row"> 
                    <div class="col-12 mb-3">
                        <h4 class="fw-bold" style="color: ${data.color}">
                            <i class="bi bi-search me-2"></i>ข้อมูลอื่นๆที่เกี่ยวข้อง 
                        </h4>
                    </div>
                        ${additionalInfoHTML}
                </div>
            </div>
        `;
    }
});
