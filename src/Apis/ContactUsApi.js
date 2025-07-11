'use client';

async function ContactUsAPi({formObj})
{
  
        try {
    const data = await fetch(
      "https://1hy2lppya6.execute-api.ap-south-1.amazonaws.com/prod/submit-form",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({ ...formObj }),
        //   body: JSON.stringify({
        //         "firstname": firstName,
        //         "email": email,
        //         "phone": phone
        // }),
        mode: "no-cors",
      }
    );
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }

}


export default  ContactUsAPi;