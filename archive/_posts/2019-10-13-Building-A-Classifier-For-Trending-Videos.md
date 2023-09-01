---
layout: post
title: "Building A Classifier For Trending Videos"
date: 2019-10-13
author: Jon Mathai
---
<em>Quick Disclaimer: This is my first technical blog post
so bear with me as I learn how to write technical blog
posts.</em>

<h1>Quick Background</h1>
The YouTube algorithm is a mysterious bit of software that many users often ponder over
<em>"Why did this up in my recommended? Why did this pop up
on my feed?"</em>. In this blog post we won't be able to
replicate the YouTube algorithm but we may be able to mimic
how YouTube picks it's trending videos. 
So I created this project with a two friends of mine and it
was our first main venture into data science and machine
learning but something we did happen to learn a lot from. 
<br/><br/>
<h1>Getting the Data</h1>
So first we need to have a dataset to work with. There are
two ways we can go about this.
<ol>
    <li>Find an existing dataset</li>
    <li>Build our dataset</li>
</ol>
Among my friends and I we actually decided to do both. We
had found an existing online at Kaggle. <a
href="https://www.kaggle.com/datasnaek/youtube-new"> Here is
one existing dataset that could be used.</a> Similar
datasets could be found online at <a href="https://www.kaggle.com/datasets">
Kaggle</a>.
<br/><br/>
To get a larger sized dataset we need to scrape YouTube for
trending videos. When I did this with friends we were able
to scrape the Popular on YouTube channel for video id's of
those trending videos. Now I believe it's a little harder to
scrape the video page on that channel. However, you should
be able to scrape the videos on the trending tab for the
video id's. Once you have the list of video id's you can use
<a href="https://developers.google.com/youtube/v3">
YouTube's Data API</a> to query for data about each individual
video using it's video id. Here's a code snippet of how to
query the video data.
<br/>
{% highlight python %}
import urllib
import json
import pandas as pd

api_key='<insert-your-api-key-here>'

def getVideoStats(api_key):
    dataframe = pd.read_csv('location-to-csv-with-video-ids')
    listofIds = dataframe['URL'].dropna()
    video_id = listofIds[0] # just pick one id for the time being
    searchUrl = 'https://www.googleapis.com/youtube/v3/videos?id='+video_id+'&key='+api_key+'&part=statistics,snippet'
    response = urllib.request.urlopen(searchUrl).read().decode('latin-1')
    jsoninfo = json.loads(response)
    return jsoninfo

{% endhighlight %}
<br/>
That snippet describes how to retrieve data about a single
YouTube video. You can run the api call in a loop in order
to get data for all of the youtube videos. One small tip to
speed up the process would be to continually append video
id's to a single string. Then pass in that string as the
video id and the api would make one request for the amount
of video id's you passed in (the max being 50 id's per
request). You'll want to write the data to a csv file so
that it can be read into a pandas dataframe when you need to
process it. After you've gotten all of the video data for
trending videos you need to repeat the process for
nontrending videos. One simple way to do that would be to go
to do different YouTube channels and scrape that channel for
videos. However, you should be careful about what kinds of
videos you're scraping. For instance many trending videos
will have higher view counts. So if you're nontrending
dataset consists of videos from really small channels that
have around 1k views each, then that would skew your
dataset. So pick YouTube channels with reasonable metrics
when it comes to their videos.
<br/><br/>
<h1>Creating and training the model</h1>
Once your file has its all of its entries of video data. You
can start going about building your model for training. My
friends and I ended up using the tensorflow framework to
build our neural network. The reason being was that it was
quite easy to get a model up and working relatively quickly.
<br/><br/>
We ended up defining our model as so.
{% highlight python %}
import pandas as pd
import numpy as np
import tensorflow as tf
from tensorflow import keras

model = keras.Sequential()
model.add(keras.layers.Dense(300, kernel_regularizer=keras.regularizers.l2(0.01), activation=tf.nn.relu))
model.add(keras.layers.Dense(300, kernel_regularizer=keras.regularizers.l2(0.01), activation=tf.nn.relu))
model.add(keras.layers.Dense(300, kernel_regularizer=keras.regularizers.l2(0.01), activation=tf.nn.relu))
model.add(keras.layers.Dense(2, activation=tf.nn.softmax))
model.compile(optimizer=tf.train.AdamOptimizer(), loss='sparse_categorical_crossentropy', metrics=['accuracy'], callbacks=[early_stop])

{% endhighlight %}
<br/>
{% highlight python %}
import bs4 
from bs4 import BeautifulSoup
url = 'https://www.youtube.come/feed/trending'
client = urlopen(url); html=client.read(); client.close()
pageSoup = BeautifulSoup(html, 'html.parser')
aTags = pageSoup.find_all('a', href=True)
newlist = []
for i in range(0, len(aTags)):
    if('watch' in aTags[i]['href']):
        newlist.append(aTags[i])
# this is pretty inefficient but for the purpose of what
# we're doing it's okay
# now you can access each url by looping through newlist and accessing
# newlist[i]['href']

{% endhighlight %}

{% highlight python %}

def standardizeData(fullSubset):
    matrixData = np.array(fullSubset)
    matrixData = matrixData.astype('float32')
    matrixData -= np.mean(matrixData, axis=0)
    matrixData /= np.std(matrixData, axis=0)

trendingSet =pd.read_csv('../data/new-datasets/trending_dataset.csv')
nontrendingSet =pd.read_csv('../data/new-datasets/nontrending_dataset.csv')
trendingDf = pd.DataFrame(trendingSet)
nontrendingDf = pd.DataFrame(nontrendingSet)))))

subsetTrending = trendingDf.head(6000)
subsetNontrending = nontrendingDf.head(len(subsetTrending))    

#Test dataset
trendingTestSet =trendingDf.iloc[-400:].drop(columns=['tags','trending','duration','video_id','video_title'],
axis=1)
nontrendingTestSet = nontrendingDf.iloc[-400:].drop(columns=['tags','trending','duration','video_id','video_title'],
axis=1)
totaldf = pd.concat([trendingTestSet, nontrendingTestSet])))))))
nonTrendingTrainSet = nontrendingDf.head(14000)

scaleMatrixData =standardizeData(pd.concat(subsetTrending,subsetNontrending))
model.fit(scaleMatrixData, trendingLabels, epochs=10)

{% endhighlight %}


{% highlight python %}
videoId = input()
video = np.array(getOneVideoStats(videoId,apiKey))
prediction = model.predict(video)

{% endhighlight %}
