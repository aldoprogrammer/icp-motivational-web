actor {
  public query func motivation(name: Text, job: Text) : async Text {
    let motivationMessage = switch (job) {
      case "Investor" { "As an investor, remember: 'The best way to predict the future is to create it.' Keep your vision clear and your investments wise." };
      case "Programmer" { "As a programmer, remember: 'The only way to do great work is to love what you do.' Code with passion, and the world will be your playground." };
      case "CEO" { "As a CEO, remember: 'The function of leadership is to produce more leaders, not more followers.' Lead with vision and integrity." };
      case "Designer" { "As a designer, remember: 'Design is not just what it looks like and feels like. Design is how it works.' Create with purpose." };
      case "Entrepreneur" { "As an entrepreneur, remember: 'The only limit to our realization of tomorrow is our doubts of today.' Keep building and innovating." };
      case _ { "Choose your path, and make it count. The world is full of opportunities waiting for you!" };
    };
    
    return "Hello, " # name # "! " # motivationMessage;
  };
};
