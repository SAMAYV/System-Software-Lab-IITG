#include<bits/stdc++.h> 
using namespace std; 
struct et 
{ 
    char value; 
    et* left, *right; 
}; 
//Function to return precedence of operators 
int precedence(char c) 
{ 
    if(c == '^') 
    return 3; 
    else if(c == '*' || c == '/') 
    return 2; 
    else if(c == '+' || c == '-') 
    return 1; 
    else
    return -1; 
} 
   
string infixToPostfix(string s) 
{ 
    stack<char> a; 
    a.push('N'); 
    int l = s.length(); 
    string ns; 
    for(int i = 0; i < l; i++) 
    { 
        if((s[i] >= 'a' && s[i] <= 'z')||(s[i] >= 'A' && s[i] <= 'Z')||((int)isdigit(s[i])))                // If the scanned character is an operand, add it to output string.  
        {
            int j=i;
            while((s[j] >= 'a' && s[j] <= 'z')||(s[j] >= 'A' && s[j] <= 'Z')||((int)isdigit(s[j])))
            {
                ns+=s[j];
                j++;
            }
            ns+=' ';
            i=j;
        }
        else if(s[i] == '(')                                                            // If the scanned character is an ‘(‘, push it to the stack. 
          a.push('('); 
        else if(s[i] == ')')                                                            // If the scanned character is an ‘)’, pop and to output string from the stack until an ‘(‘ is encountered.  
        { 
            while(a.top() != 'N' && a.top() != '(') 
            { 
                char c = a.top(); 
                a.pop(); 
                ns += c;
                
            } 
            if(a.top() == '(') 
            { 
                char c = a.top(); 
                a.pop(); 
            } 
        } 
        else                                                                            //If an operator is scanned 
        { 
            while(a.top() != 'N' && precedence(s[i]) <= precedence(a.top())) 
            { 
                char c = a.top(); 
                a.pop(); 
                ns += c; 
            } 
            a.push(s[i]); 
        } 
  
    } 
    //Pop all the remaining elements from the stack 
    while(a.top() != 'N') 
    { 
        char c = a.top(); 
        a.pop(); 
        ns += c; 
    } 
      
    return ns; 
  
} 
et* newNode(int v) 
{ 
    et *temp = new et; 
    temp->left = temp->right = NULL; 
    temp->value = v; 
    return temp; 
}; 

bool isOperator(char c) 
{ 
    if (c == '+' || c == '-' || 
            c == '*' || c == '/' || 
            c == '^') 
        return true; 
    return false; 
}

et* constructTree(string q) 
{ 
    stack<et *> st; 
    et *t, *t1, *t2; 
  
    // Traverse through every character of 
    // input expression 
    for (int i=0; q[i]!='\0'; i+=2) 
    { 
        // If operand, simply push into stack 
        if (!isOperator(q[i])) 
        { 
            t = newNode(q[i]); 
            st.push(t); 
        } 
        else // operator 
        { 
            t = newNode(q[i]); 
  
            // Pop two top nodes 
            t1 = st.top(); // Store top 
            st.pop();      // Remove top 
            t2 = st.top(); 
            st.pop(); 
  
            //  make them children 
            t->right = t1; 
            t->left = t2; 
  
            // Add this subexpression to stack 
            st.push(t); 
        } 
    } 
  
    //  only element will be root of expression 
    // tree 
    t = st.top(); 
    st.pop(); 
  
    return t; 
} 
int toInt(string s)  
{  
    int num = 0;  
      
    // Check if the integral value is  
    // negative or not 
    // If it is not negative, generate the number  
    // normally 
    if(s[0]!='-') 
        for (int i=0; i<s.length(); i++)  
            num = num*10 + (int(s[i])-48);  
    // If it is negative, calculate the +ve number 
    // first ignoring the sign and invert the  
    // sign at the end 
    else
        for (int i=1; i<s.length(); i++)  
        { 
            num = num*10 + (int(s[i])-48);  
            num = num*-1; 
        } 
      
    return num;  
}  
/*int eval(et* root)  
{  
    // empty tree  
    if (!root)  
        return 0;  
  
    // leaf node i.e, an integer  
    if (!root->left && !root->right)  
        return toInt(root->value);  
  
    // Evaluate left subtree  
    int l_val = eval(root->left);  
  
    // Evaluate right subtree  
    int r_val = eval(root->right);  
  
    // Check which operator to apply  
    if (root->value=="+")  
        return l_val+r_val;  
  
    if (root->value=="-")  
        return l_val-r_val;  
  
    if (root->value=="*")  
        return l_val*r_val;  
    if (root->value=="/")  
        return l_val/r_val;  
}*/  
void inorder(et *t) 
{ 
    if(t) 
    { 
        inorder(t->left); 
        printf("%c", t->value); 
        inorder(t->right); 
    } 
} 
//Driver program to test above functions 
int main() 
{ 
    string exp;
    cin>>exp; 
    string d = infixToPostfix(exp);
    cout<<d<<"\n"; 
    //et* r = constructTree(d); 
    //inorder(r); 
   // cout << eval(r);

    return 0; 
} 