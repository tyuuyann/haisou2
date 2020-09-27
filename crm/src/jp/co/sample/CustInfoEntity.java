package jp.co.sample;

import jp.co.sample.common.BaseEntity;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CustInfoEntity extends BaseEntity{

	private String custid;

	private String cust_name;

	private String cust_kana;

	private String point_ido;

	private String point_keido;

	private String tel;

	private String addres;

	private String yubino;

	public CustInfoEntity() {
		super("custinfo", "");
		// TODO 自動生成されたコンストラクター・スタブ
	}

}
