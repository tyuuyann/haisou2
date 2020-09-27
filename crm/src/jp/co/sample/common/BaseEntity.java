package jp.co.sample.common;

import lombok.Data;

@Data
public class BaseEntity {
	private String table;

	private String sqlId;

	public BaseEntity(String table, String sqlId){
		this.table = table;
		this.sqlId= sqlId;
	}
}
