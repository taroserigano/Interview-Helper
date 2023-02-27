

JIT Compiler 


1. Java Source Code-> JDK (compiler) 

-JDK turns source code into Byte Codes 

2. JDK --> JRE (interpreter + JIT Compiler) 

-converts byte code into machine code 
-interpreter reads code line by line; but slow  
-JIT Compiler converts byte code into machine code Fast! 


18. Interface vs Abstract 

Interface:
-has public static methods with no concrete implementations
-has to implement all when implementing 
-can implements multiple interfaces

Abstract: 
-can has any access; public, private etc 
-optional implementation
-can extend only one abstract class 


23. Serialize

-into the Byte stream, into Object over the network 
-transient to stop serialization 
-

31. String 

-is an objects of java.lang.String class 


37. creation of Thread 

-implement Runnable interface 
-extend Thread class 


48. copy of Object

Clone method from Cloneable interface 



49. benefits of inheritance 

-re-use the code of super class
-Polymorphism 


54 

stack - Last in, First out  
Queue - First In, First out  

55. 

transient - prevents from being serialized 


56. 

Wrapper like Integer(55) turns primitive data type into an Object  


57. 

only checked typed exceptions can be caught in the catch block 


58.  Thread status 

1. Ready
2. Running
3. Waiting
4. Dead 

60 - Override & Overload 

Override:
-Same parameters 
-Same return Types. * but only subtypes are allowed. 
-Extends from parent class 

Overload: 
-Different Parameters 
-Optional different Return Type
-Within same class 

71. JDK 

JDK is required for development 
JRE is required for running the program 


76. interface methods 

All interface methods are only abstract classes 


82. Synchronized 

Only one thread can access DB, implement Synchronized in the method. 


85. Heap Memory 

Objects are stored in memory space from heap 


88. Exception not handled 

If exceptioned were not handled in Catch block, the program doesn't execute after the exception point 


 
















































































