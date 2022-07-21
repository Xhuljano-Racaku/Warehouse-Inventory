package servlet;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebFilter;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import DAO.ItemDAO;
import merchandises.Item;

@WebServlet(name="merchandise-servlet", urlPatterns="/items/*")
//@WebFilter (urlPatterns = "http://localhost:4200")
public class ItemServlet extends HttpServlet {
	
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		List<Item> itemList = null;
		try(ItemDAO dao = new ItemDAO()){
			itemList = dao.findAll();
		}catch(Exception e) {
			e.printStackTrace();
		}
		ObjectMapper mapper = new ObjectMapper();
		String json = mapper.writeValueAsString(itemList);
		resp.getWriter().print(json);
		resp.setContentType("application/json");
		System.out.println("Fetched data");
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		Item item = mapper.readValue(req.getInputStream(), Item.class);
		try(ItemDAO dao = new ItemDAO()){
			dao.save(item);
		}catch(Exception e) {
			e.printStackTrace();

		}
		resp.setStatus(201);
		System.out.println("Created Item");
	}
	
	@Override
	protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		Item item = mapper.readValue(req.getInputStream(), Item.class);
		try(ItemDAO dao = new ItemDAO()){
			dao.update(item);
		}catch(Exception e) {
			e.printStackTrace();
		}
		resp.setStatus(204);
		System.out.println("Updated Item");
	}
	
	@Override
	protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		Item item = mapper.readValue(req.getInputStream(), Item.class);
		try(ItemDAO dao = new ItemDAO()){
			dao.delete(item);
		}catch(Exception e) {
			e.printStackTrace();
			
		}
		resp.setStatus(204);
		System.out.println("Deleted Item");
	}
}
