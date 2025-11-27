// แก้ไขข้อมูลลูกค้าที่นี่
const brandConfig = {
    name: "TERRA PAFE", // ชื่อแบรนด์
    total_slots: 3      // จำนวนจุดที่เช่า
};

// ข้อมูลรายเดือน
const database = {
    "aug-2025": {
        label: "August 2025",
        slots: [
            { id: "WL1_D", name: "Shelf ทางเข้า", imp: "6,712", min: "3,356", hr: "55.93", res: "3200x384", type: "video" },
            { id: "WL3-L1", name: "Shelf เครื่องสำอาง", imp: "6,683", min: "3,341", hr: "55.41", res: "400x384", type: "video" }
        ]
    },
    // พอขึ้นเดือนใหม่ ก็แค่ Copy block ข้างบนมาแปะ แล้วแก้ตัวเลข
    "sep-2025": {
        label: "September 2025",
        slots: [
            { id: "WL1_D", name: "Shelf ทางเข้า", imp: "7,200", min: "3,600", hr: "60.00", res: "3200x384", type: "video" }
        ]
    }
};