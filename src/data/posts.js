const posts = [
    {
      slug: 'michael-moscovitz',
      title: 'Michael Moscovitz',
      excerpt:
        'If you’re an OG, you already know what this is about. If not, I’ll let you in on our secret; The Princess Diaries by Meg Cabot. I’ve read the series(or part of it) a million times. And just yesterday, I decided that book 3, Third Time Lucky, is my favourite. Michael Moscovitz is the character… ',
      content:
        'If you’re an OG, you already know what this is about. \nIf not, I’ll let you in on our secret; The Princess Diaries by Meg Cabot.\nI’ve read the series(or part of it) a million times. And just yesterday, I decided that book 3, Third Time Lucky, is my favourite. \nMichael Moscovitz is the character that you’d expect to be the “bad boy”, seeing as he’s the main character’s love interest. But he’s not, and that’s what’s so refreshing about the series. He’s super smart and kind and caring. And to be honest, I can’t believe he actually liked Mia too! He made a whole computer program to respond to her anonymous love letters. 😭\nI wonder how he put up with Mia though. I could never. She talks too much, and asks questions that make you want to break her head! \nYou should read The Princess Diaries, and be bold; read all 10 books. I think everyone would enjoy it, whether they like romance or not. \nIt’s so sad that I have a word limit because I have so much to say. But, I will bid you adieu right here, until next time…\n-JD.',
      date: 'Jan 4, 2026',
      readingTime: '6 min read',
    },
    {
      slug: 'e-shock-you',
      title: 'E shock you? Or whatever the third little pig said to the big bad wolf…',
      excerpt:
        'Today, I am the third little pig. He’s one of my all time children stories favourite. He was way too smart abeg. Pig 1 and Pig 2, why was it a good idea to build your house out of straw or sticks? Anyway, Pig 3 built his own house from bricks, and set a pot… ',
      content: 'Today, I am the third little pig. He’s one of my all time children stories favourite. He was way too smart abeg. Pig 1 and Pig 2, why was it a good idea to build your house out of straw or sticks? Anyway, Pig 3 built his own house from bricks, and set a pot of boiling water on the grate, under the chimney, successfully boiling the wolf to death… An ultimate sharp guy. The funniest part is actually when the wolf threatened to huff and puff and blow Pig 3’s house down. Pig 3 was probably smiling and shaking his head at the wolf, but the wolf was forming hard guy. So he huffed and puffed and huffed and puffed, but the house no move… Then Pig 3 looked out the window and probably said something along the lines of “E shock you?” The wolf then thought he was sly and tried to enter into the chimney, only to land in his Waterloo. Our elders say, “First to do, e no dey pain”.In all things, be like the third little pig.\n-JD\nP.S. Listen to Waterloo by ABBA',
      date: 'Jan 8, 2026',
      readingTime: '5 min read',
    },
    {
      slug: 'learning-to-sit-with-a-paragraph',
      title: 'Learning to Sit With a Paragraph',
      excerpt:
        'Why rushing past a sentence is the fastest way to weaken it.',
      content:
        'Good writing is rarely rushed. It is sat with. A paragraph often needs time to reveal what it wants to be. When you pause — rereading slowly, listening for rhythm, checking whether the sentence earns its place — the work deepens. Sitting with a paragraph means resisting the urge to move on too quickly. It means allowing discomfort, confusion, and revision to do their work. Over time, this patience teaches you how your own voice behaves on the page.',
      date: 'Jan 13, 2026',
      readingTime: '4 min read',
    },
    {
      slug: 'on-writing-without-explaining-yourself',
      title: 'On Writing Without Explaining Yourself',
      excerpt:
        'Trusting the reader is a skill, not a risk.',
      content:
        'Not every idea needs a disclaimer. Not every sentence needs to justify its existence. Writers often over-explain out of fear: fear of being misunderstood, ignored, or judged. But strong writing leaves space. It trusts the reader to meet the work halfway. When you allow ambiguity, you invite interpretation. When you resist over-clarifying, you preserve texture. Writing does not need to defend itself — it needs to be felt.',
      date: 'Jan 18, 2026',
      readingTime: '4 min read',
    },
    {
      slug: 'the-quiet-discipline-of-finishing',
      title: 'The Quiet Discipline of Finishing',
      excerpt:
        'Starting is exciting. Finishing is where writers are made.',
      content:
        'Most unfinished work does not fail because it is bad. It fails because it requires endurance. Finishing demands returning on days when the work feels flat, predictable, or resistant. It is a quiet discipline — showing up without drama, making small progress, and accepting imperfection. Completion teaches more than inspiration ever will. Each finished piece sharpens your ability to begin again.',
      date: 'Jan 23, 2026',
      readingTime: '5 min read',
    },
  ];  
  
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  export async function getPosts() {
    await delay(350);
    return posts;
  }
  
  export async function getPostBySlug(slug) {
    await delay(320);
    const post = posts.find((entry) => entry.slug === slug);
    if (!post) {
      throw new Error('Post not found');
    }
    return post;
  }
  
  export { posts };
  