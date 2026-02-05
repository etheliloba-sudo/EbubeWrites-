const posts = [
    {
      slug: 'writing-when-nobody-is-watching',
      title: 'Writing When Nobody Is Watching',
      excerpt:
        'What it means to keep writing even when there is no audience, no metrics, and no applause.',
      content:
        'Most writers quit in the quiet season — the stretch where no one is reading, responding, or even aware that the work exists. But this is where the real writing life is formed. Writing when nobody is watching teaches you honesty. You stop performing. You stop chasing approval. Instead, you begin listening to your own voice. The sentences get slower, truer, and more deliberate. Over time, this private discipline becomes the backbone of any public success. If you can write faithfully in obscurity, attention will never own you.',
      date: 'Jan 4, 2026',
      readingTime: '6 min read',
      tags: ['Writing', 'Discipline', 'Craft'],
    },
    {
      slug: 'the-difference-between-sounding-smart-and-being-clear',
      title: 'The Difference Between Sounding Smart and Being Clear',
      excerpt:
        'Why clarity is harder than complexity, and why it matters more.',
      content:
        'Many early drafts lean on complexity as a form of protection. Big words, layered metaphors, and abstract phrasing can hide uncertainty. Clarity, on the other hand, requires confidence. It forces the writer to understand what they are saying well enough to say it plainly. The goal is not to simplify thought, but to sharpen it. When a sentence is clear, it respects the reader’s time. When a paragraph is precise, it invites trust. The best writing often sounds effortless because of how much effort went into removing what wasn’t necessary.',
      date: 'Jan 8, 2026',
      readingTime: '5 min read',
      tags: ['Writing', 'Clarity', 'Editing'],
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
      tags: ['Process', 'Writing', 'Revision'],
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
      tags: ['Voice', 'Confidence', 'Writing'],
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
      tags: ['Discipline', 'Writing', 'Practice'],
    },
    {
      slug: 'finding-your-voice-by-using-it',
      title: 'Finding Your Voice by Using It',
      excerpt:
        'Voice is not discovered. It is built.',
      content:
        'Writers often search for their voice as if it is hidden somewhere, waiting to be found. In reality, voice emerges through repetition. Through writing badly. Through finishing pieces that don’t quite work. The more you write, the more patterns appear — rhythms you return to, questions you keep asking, sentences that feel natural to you. Voice is the residue of practice.',
      date: 'Jan 27, 2026',
      readingTime: '4 min read',
      tags: ['Voice', 'Practice', 'Writing'],
    },
    {
      slug: 'reading-like-a-writer',
      title: 'Reading Like a Writer',
      excerpt:
        'How attentive reading quietly reshapes your own sentences.',
      content:
        'Reading for pleasure is important, but reading like a writer changes everything. You begin noticing structure, pacing, and restraint. You see what is left unsaid. You feel where a paragraph turns. Over time, these observations seep into your own work. The page becomes a teacher. Every well-crafted piece expands your sense of what is possible.',
      date: 'Feb 1, 2026',
      readingTime: '5 min read',
      tags: ['Reading', 'Craft', 'Learning'],
    },
    {
      slug: 'writing-through-doubt',
      title: 'Writing Through Doubt',
      excerpt:
        'Doubt doesn’t disappear — you learn to work alongside it.',
      content:
        'Every writer carries doubt. The difference is not its absence, but how it is handled. Doubt can sharpen attention when acknowledged, or paralyze progress when obeyed. Writing through doubt means letting the work exist before it is perfect. It means choosing motion over certainty. Over time, the doubt quiets — not because it leaves, but because it loses authority.',
      date: 'Feb 6, 2026',
      readingTime: '5 min read',
      tags: ['Mindset', 'Writing', 'Process'],
    },
    {
      slug: 'the-long-view-of-a-writing-life',
      title: 'The Long View of a Writing Life',
      excerpt:
        'Why consistency matters more than intensity.',
      content:
        'Writing is not a sprint. It is a long, uneven walk. Some seasons are productive, others reflective. Taking the long view allows space for growth without panic. It reminds you that a single piece does not define you. The work accumulates quietly. Over years, not days, a body of work forms — shaped by patience, curiosity, and persistence.',
      date: 'Feb 10, 2026',
      readingTime: '6 min read',
      tags: ['Perspective', 'Writing Life', 'Consistency'],
    },
    {
      slug: 'why-you-should-keep-a-private-draft',
      title: 'Why You Should Keep a Private Draft',
      excerpt:
        'Not everything needs to be published to matter.',
      content:
        'Private drafts give writers freedom. They remove the pressure of audience and outcome. In private, you can explore half-formed ideas, experiment with tone, and write without performance. These drafts often contain the most honest thinking. Over time, they become a well you can return to — proof that writing has value even before it is shared.',
      date: 'Feb 14, 2026',
      readingTime: '5 min read',
      tags: ['Practice', 'Writing', 'Reflection'],
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
  