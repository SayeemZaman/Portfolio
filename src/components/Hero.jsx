import profile from "../assets/profile.jpeg";

export default function Hero() {
  return (
    <div id="hero">
      <div>Hi! I'm Sayeem Zaman</div>
      <h1>Freelance Frontend Web Developer</h1>
      <p>
        I usually make portfolio & landing pages for people, I make websites
        using the design people provide me.
      </p>
      <button>Contact Me</button>
      <img src={profile} alt="Profile picture" />
    </div>
  );
}
