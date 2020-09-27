package jp.co.sample;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/sample")
public class SampleResource {
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public SampleDTO hello() {
		SampleDTO dto = new SampleDTO();
		dto.loginUser = "11111";
		dto.loginPswd = "11111";
		return dto;
	}
}
