import SlideInEffect from "../../animations/slideIn/SlideInEffect";

export default function HomePage() {
  return (
    <SlideInEffect duration={1}>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main entry point of the application.</p>
    </SlideInEffect>
  );
}
