

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Hashtable;
import java.util.Iterator;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import TouchenKey_Crypto.TouchEnKey_Crypto;

/**
 * Servlet implementation class NxkeyDecode
 */
public class NxkeyDecode extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public NxkeyDecode() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		String privateKey = new String("C:/Users/baoluo/Desktop/eclipse-workspace/TouchEn nxKey_v1.0.13.1/src/main/webapp/WEB-INF/raon_cert/Private2048.key.der"); 
		TouchEnKey_Crypto Tk  = new TouchEnKey_Crypto(request,session,privateKey); 
		
		System.out.println("result : " + Tk.getLastError() + " (" + Tk.getLastErrorMessage() + ")");
		
		Hashtable ht = Tk.getDecryptedHashTable();
		Iterator itr = ht.keySet().iterator();
		
		PrintWriter pw = response.getWriter();
		while (itr.hasNext()) {
			String key = (String)itr.next();
	  
		if (key.indexOf("E2E_") == -1) {	
			   pw.println(key + " : " + ht.get(key));
			   System.out.println(key + " : " + ht.get(key));
			   pw.flush();
			}
		}	
		
	}

}
