import React from "react";

export default function Contact() {
	return (
		<div style={{ marginTop: "3rem", marginLeft: "3rem" }}>
            <span style={{marginLeft:'30%', display:'inline-flex'}}>
                <img src='https://cdn.pixabay.com/photo/2017/08/17/07/47/travel-2650303_960_720.jpg' style={{width:'auto', height:'25rem'}}/>
                <div style={{ textAlign: "justify", textIndent: "1rem", position:'absolute', top:'40%', left:'50%', transform: 'translate(-50%, -50%)', color:'white'}}>
						<h1>Main Office Contact</h1>
                        <h3><b>Phone no:</b> 111-111-111</h3>
                        <h3><b>e-mail:</b> office@fakeshop.com</h3>
					</div>

            </span>
			<ul style={{ listStyleType: "none", marginLeft:'2rem',marginRight:'2rem', display:'flex', justifyContent:'space-between'}}>
				<li style={{ display: "flex", marginTop:'4rem' }}>
					<img
						src="https://cdn.pixabay.com/photo/2017/08/12/18/31/male-2634974_960_720.jpg"
						style={{ maxHeight: "10rem", maxWidth: "15rem", float: "left", borderRadius:"50%" }}
					/>
					<div style={{ textAlign: "justify", textIndent: "1rem" }}>
						<p><b>Name:</b> Wojtek Kowalski</p>
                        <p><b>Position:</b> Customer contact</p>
                        <p><b>Phone no.:</b> 111-111-111</p>
                        <p><b>e-mail:</b> imie.nazwisko@fakeshop.com</p>
					</div>
				</li>
                <li style={{ display: "flex", marginTop:'4rem' }}>
					<img
						src="https://cdn.pixabay.com/photo/2015/08/05/04/25/people-875617_960_720.jpg"
						style={{ maxHeight: "10rem", maxWidth: "15rem", float: "left", borderRadius:'50%'  }}
					/>
					<div style={{ textAlign: "justify", textIndent: "1rem" }}>
						<p><b>Name:</b> Adam Nowak</p>
                        <p><b>Position:</b> Customer contact</p>
                        <p><b>Phone no.:</b> 111-111-111</p>
                        <p><b>e-mail:</b> imie.nazwisko@fakeshop.com</p>
					</div>
				</li>
                <li style={{ display: "flex", marginTop:'4rem' }}>
					<img
						src="https://cdn.pixabay.com/photo/2017/12/22/14/42/girl-3033718_960_720.jpg"
						style={{ maxHeight: "10rem", maxWidth: "15rem", float: "left", borderRadius:'50%' }}
					/>
					<div style={{ textAlign: "justify", textIndent: "1rem" }}>
						<p><b>Name:</b> Joanna Antonov</p>
                        <p><b>Position:</b> Customer contact</p>
                        <p><b>Phone no.:</b> 111-111-111</p>
                        <p><b>e-mail:</b> imie.nazwisko@fakeshop.com</p>
					</div>
				</li>
                
			</ul>
		</div>
	);
}
