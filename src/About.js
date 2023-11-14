import React from 'react';

function About() {
  return (
    <section className="bg-light py-5">
      <div className="container px-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-xxl-8">
            <div className="text-center my-5">
              <h2 className="display-5 fw-bolder">
                <span className="text-gradient d-inline">About Us</span>
              </h2>

              {/* eslint-disable-next-line */}
              <h2 className="lead fw-bold mb-4">Hashing Algorithm Team</h2>
              <div>
              <p className="text-muted">
                      วัตถุประสงค์ เว็บไซต์นี้สร้างมาเพื่อ:อำนวยความสะดวกสำหรับสาย&quot;Dev&quot;ที่ใช้ระบบ <span className="text-gradient">&quot;Hashing investigate&quot;</span> ในการตรวจสอบความถูกต้องของซอฟต์แวร์ของตนว่าไฟลนั้นถูกแก้ไขหรือเพิ่มเติมโดยไม่ได้รับอนุญาตหรือไม่
               <p className="fw-blood text-gradient">
                 (สามารถ hash ทีเดียวได้ทั้งโฟลเดอร์เลย และ แปลงได้ทุกนามสกุลไฟลไม่จำกัดว่าเป็น mp4, video, เสียง และอื่นๆ)
              </p>
               </p>
          </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
