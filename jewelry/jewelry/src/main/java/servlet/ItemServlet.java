package servlet;

import java.io.IOException;
import java.util.concurrent.CopyOnWriteArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import merchandises.Item;

@WebServlet(name="merchandise-servlet", urlPatterns="/items")
public class ItemServlet extends HttpServlet {
	
	private CopyOnWriteArrayList<Item> itemList = new CopyOnWriteArrayList();
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		String json = mapper.writeValueAsString(itemList);
		resp.getWriter().print(json);
		resp.setContentType("application/json");
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		Item item = mapper.readValue(req.getInputStream(), Item.class);
		itemList.add(item);
		resp.setStatus(201);
		System.out.println("Created Item");
	}
}
