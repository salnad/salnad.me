---
type: trail
slug: 'ghuntley-decompiling-with-llms'
title: 'decompiling executables with llms'
description: 'a tech guy getting meta again'
tags: ['llms', 'software engineering']
dateCreated: 2025-03-02
dateModified: 2025-03-02
link: 'https://ghuntley.com/tradecraft/'
published: False
---

an interesting blogpost by Geoffrey Huntley showing how llms can be used to “decompile” applications with bundled / minified code (and in a [following post](https://ghuntley.com/z80/)) they show it can also be done for assembly. i think this is especially interesting (and concerning for the creators) of electron applications, as there’s relatively accessible source code in languages and frameworks that llms are actively being trained on, though i imagine there will be a day that most compiled apps can be undone.

i also appreciate that the framework for going through this process along with the “source prompt” (a term i use for the written instructions guiding an llm, which i’m findig increasingly more interesting than source code). i’ve summarized this below:

> CLI.js is a commonjs typescript application which has been compiled with webpack.
> The symbols have been stripped.
> Inspect the source code thoroughly (extra thinking) but skip the SentrySDK source code.
> Create a specification library of features of the application.
> Convert the source code into human readable.
> Keep going until you are done!

something i also found incredibly fascinating was this quote

> (_the app code being analyzed_) is close to 5mb - which is way bigger than any LLM context window out here. It shouldn't work but it does. You're going to need babysit it for a while and feed it reward tokens of kind words ("_your doing good, please continue_") and encourage it to keep on going on - even if it gives up. It will time out, lots...

i find it a bit humanizing, that even though this capability is at the very edge of llms capabilities and not advertized, it’s able to accomplish it with some nice words. (i’m feeling a little vindicating for telling everyone that would listen they should say please and ty to these models!)

anyway, i’ve been succesfully nerdsniped, and will be trying to … \*cough\* decompile some _totally open source_ applications. i’ll edit this post if i have any cool findings!

now here’s a haiku for you!

<blockquote class="text-white mb-12 border-l-4 pl-4 italic">
say please and thank you <br>
your models deserve to know <br>
we’re appreciative!
</blockquote>
