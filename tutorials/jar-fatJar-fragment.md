**A normal JAR file contains only the classes and resources that you created for your app.** If you app has _dependencies_ (i.e., third party libraries that your app depends on), the JAR file will not work unless the person running the JAR file also has those dependencies in their computer. This is not ideal.

**A _fat_ JAR (aka _uber_ JAR) file solves the above problem by including all the dependencies inside the JAR file** itself %%(which makes the JAR file bigger than usual, hence the term _fat_)%%.
